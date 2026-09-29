import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Substitui o react-countup: o número final já está no HTML (buscadores e pré-render leem o valor certo)
// e a animação de 0 até o valor só roda para visitantes, quando o número entra na tela.
const IS_BOT = typeof navigator !== 'undefined' && /bot|crawl|spider|slurp|prerender|lighthouse/i.test(navigator.userAgent);

function format(n, decimals, separator, decimal) {
  const fixed = Number(n).toFixed(decimals);
  const [int, dec] = fixed.split('.');
  const withSep = separator ? int.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : int;
  return dec ? `${withSep}${decimal}${dec}` : withSep;
}

export default function CountUp({
  start = 0, end, duration = 2, decimals = 0, prefix = '', suffix = '',
  separator = '', decimal = '.', className,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(end);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || IS_BOT) return;
    started.current = true;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - t0) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(start + (end - start) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    setValue(start);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, start, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{format(value, decimals, separator, decimal)}{suffix}
    </span>
  );
}
