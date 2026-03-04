import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    setTheme(current || 'light');
  }, []);

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        position: 'fixed',
        top: '1.5rem',
        right: '1.5rem',
        zIndex: 100,
        background: 'none',
        border: 'none',
        color: 'var(--color-text)',
        fontSize: '1.5rem',
        cursor: 'pointer',
        lineHeight: 1,
        padding: '0.25rem',
        transition: 'color 0.2s',
      }}
    >
      {theme === 'light' ? '●' : '○'}
    </button>
  );
}
