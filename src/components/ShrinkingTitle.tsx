import { useState, useEffect, useCallback } from 'react';

export default function ShrinkingTitle() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const threshold = window.innerHeight * 0.25;
    const p = Math.min(scrollY / threshold, 1);
    setProgress(p);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const height = `${33 - progress * 25}vh`;
  const fontSize = `clamp(2rem, ${8 - progress * 6}rem, 8rem)`;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        backgroundColor: 'var(--color-bg)',
        transition: 'background-color 0.2s',
        overflow: 'hidden',
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 600,
          fontStyle: 'italic',
          fontSize,
          color: 'var(--color-text)',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          transition: 'color 0.2s',
        }}
      >
        unstructured
      </a>
    </header>
  );
}
