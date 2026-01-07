"use client";

import { useEffect } from 'react';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest('a');

      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return <>{children}</>;
}
