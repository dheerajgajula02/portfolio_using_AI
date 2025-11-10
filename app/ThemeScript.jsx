'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (saved === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        // default: respect prefers-color-scheme
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) document.documentElement.classList.add('dark');
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
