from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime, timezone
import uuid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# ============================================================
# MODELS
# ============================================================

class LeadCreate(BaseModel):
    name: str
    company: str
    email: str
    whatsapp: str
    role: str
    meta_90: Optional[str] = None
    commercial_team: Optional[str] = None
    current_stack: Optional[str] = None
    avg_ticket: Optional[str] = None
    source: Optional[str] = "site"


class Lead(LeadCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class BlogPostCreate(BaseModel):
    title: str
    slug: str
    content: str
    excerpt: str
    category: str
    author: Optional[str] = "pollo.ag"
    published: Optional[bool] = False
    cover_image: Optional[str] = None
    seo_title: Optional[str] = None
    seo_description: Optional[str] = None


class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    content: Optional[str] = None
    excerpt: Optional[str] = None
    category: Optional[str] = None
    author: Optional[str] = None
    published: Optional[bool] = None
    cover_image: Optional[str] = None
    seo_title: Optional[str] = None
    seo_description: Optional[str] = None


class BlogPost(BlogPostCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    updated_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ============================================================
# HEALTH
# ============================================================

@api_router.get("/")
async def root():
    return {"message": "pollo.ag API", "status": "ok"}


# ============================================================
# LEADS
# ============================================================

@api_router.post("/leads", response_model=Lead)
async def create_lead(lead_data: LeadCreate):
    lead = Lead(**lead_data.model_dump())
    await db.leads.insert_one(lead.model_dump())
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    leads = await db.leads.find({}, {"_id": 0}).to_list(1000)
    return leads


# ============================================================
# BLOG
# ============================================================

@api_router.get("/blog/admin/posts", response_model=List[BlogPost])
async def get_all_posts_admin():
    posts = await db.blog_posts.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return posts


@api_router.get("/blog/categories")
async def get_categories():
    categories = await db.blog_posts.distinct("category")
    return categories


@api_router.post("/blog/posts", response_model=BlogPost)
async def create_post(post_data: BlogPostCreate):
    existing = await db.blog_posts.find_one({"slug": post_data.slug}, {"_id": 0})
    if existing:
        raise HTTPException(status_code=400, detail="Slug já existe")
    post = BlogPost(**post_data.model_dump())
    await db.blog_posts.insert_one(post.model_dump())
    return post


@api_router.get("/blog/posts", response_model=List[BlogPost])
async def get_posts(published_only: bool = True):
    query = {"published": True} if published_only else {}
    posts = await db.blog_posts.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return posts


@api_router.get("/blog/posts/{post_id_or_slug}", response_model=BlogPost)
async def get_post(post_id_or_slug: str):
    post = await db.blog_posts.find_one(
        {"$or": [{"id": post_id_or_slug}, {"slug": post_id_or_slug}]},
        {"_id": 0}
    )
    if not post:
        raise HTTPException(status_code=404, detail="Post não encontrado")
    return post


@api_router.put("/blog/posts/{post_id}", response_model=BlogPost)
async def update_post(post_id: str, post_update: BlogPostUpdate):
    update_data = post_update.model_dump(exclude_unset=True)
    update_data["updated_at"] = datetime.now(timezone.utc).isoformat()
    result = await db.blog_posts.update_one({"id": post_id}, {"$set": update_data})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Post não encontrado")
    post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
    return post


@api_router.delete("/blog/posts/{post_id}")
async def delete_post(post_id: str):
    result = await db.blog_posts.delete_one({"id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post não encontrado")
    return {"message": "Post excluído"}


# ============================================================
# SETUP
# ============================================================

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
