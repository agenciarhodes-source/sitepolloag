import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://pollo-ia.preview.emergentagent.com').rstrip('/')

# Health check
class TestHealth:
    def test_api_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        print(f"Health OK: {data}")

# Leads
class TestLeads:
    def test_create_lead(self):
        payload = {
            "name": "TEST_User",
            "company": "TEST_Company",
            "email": "test@pollo.ag",
            "whatsapp": "11999999999",
            "role": "CEO",
            "source": "test"
        }
        r = requests.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["email"] == "test@pollo.ag"
        assert "id" in data
        assert "created_at" in data
        print(f"Lead created: {data['id']}")

    def test_get_leads(self):
        r = requests.get(f"{BASE_URL}/api/leads")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        print(f"Leads count: {len(data)}")

# Blog
class TestBlog:
    created_post_id = None

    def test_get_posts_empty_or_list(self):
        r = requests.get(f"{BASE_URL}/api/blog/posts")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        print(f"Published posts: {len(data)}")

    def test_create_post(self):
        payload = {
            "title": "TEST_Post Title",
            "slug": "test-post-title-unique-999",
            "content": "Test content body here",
            "excerpt": "Short excerpt",
            "category": "Marketing",
            "published": False
        }
        r = requests.post(f"{BASE_URL}/api/blog/posts", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["title"] == "TEST_Post Title"
        assert "id" in data
        TestBlog.created_post_id = data["id"]
        print(f"Post created: {data['id']}")

    def test_get_admin_posts(self):
        r = requests.get(f"{BASE_URL}/api/blog/admin/posts")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        print(f"Admin posts: {len(data)}")

    def test_toggle_publish(self):
        if not TestBlog.created_post_id:
            pytest.skip("No post created")
        r = requests.put(f"{BASE_URL}/api/blog/posts/{TestBlog.created_post_id}", json={"published": True})
        assert r.status_code == 200
        data = r.json()
        assert data["published"] == True
        print(f"Post published: {data['id']}")

    def test_get_post_by_slug(self):
        r = requests.get(f"{BASE_URL}/api/blog/posts/test-post-title-unique-999")
        assert r.status_code == 200
        data = r.json()
        assert data["slug"] == "test-post-title-unique-999"

    def test_delete_post(self):
        if not TestBlog.created_post_id:
            pytest.skip("No post created")
        r = requests.delete(f"{BASE_URL}/api/blog/posts/{TestBlog.created_post_id}")
        assert r.status_code == 200
        # verify deletion
        r2 = requests.get(f"{BASE_URL}/api/blog/posts/{TestBlog.created_post_id}")
        assert r2.status_code == 404
        print("Post deleted and verified 404")

    def test_duplicate_slug(self):
        payload = {
            "title": "TEST_Dup", "slug": "test-dup-slug-888",
            "content": "c", "excerpt": "e", "category": "SEO"
        }
        r1 = requests.post(f"{BASE_URL}/api/blog/posts", json=payload)
        assert r1.status_code == 200
        r2 = requests.post(f"{BASE_URL}/api/blog/posts", json=payload)
        assert r2.status_code == 400
        # cleanup
        post_id = r1.json()["id"]
        requests.delete(f"{BASE_URL}/api/blog/posts/{post_id}")
        print("Duplicate slug correctly rejected")

    def test_get_categories(self):
        r = requests.get(f"{BASE_URL}/api/blog/categories")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        print(f"Categories: {data}")
