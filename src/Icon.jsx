import React from 'react';

const shapes = {
  "arrow-up-right": <path d="M7 17 17 7M7 7h10v10" />,
  "arrow-down": <path d="M12 4v16m-6-6 6 6 6-6" />,
  "arrow-up": <path d="M12 20V4m-6 6 6-6 6 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="m5 12 4 4L19 6" />,
  asterisk: <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />,
  sparkle: <path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
  leaf: <><path d="M20 3c-8-1-15 3-15 10a6 6 0 0 0 6 6c7 0 10-8 9-16ZM4 21 16 9" /><path d="M8 12v5h5" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18h1a2.5 2.5 0 0 0 1.8-4.2 1.5 1.5 0 0 1 1.1-2.6H18a3 3 0 0 0 3-3C21 6.6 17 3 12 3Z" /><circle cx="7.5" cy="10" r=".7" /><circle cx="11" cy="7" r=".7" /><circle cx="15.5" cy="8" r=".7" /></>,
  star: <path d="m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L2.9 9.6l6.3-.9Z" />,
  quote: <path d="M10 6H4v7h4c0 3-1.5 4.5-4 5M21 6h-6v7h4c0 3-1.5 4.5-4 5" />,
};

/** Decorative SVGs inherit the surrounding text color and size. */
export default function Icon({name, className = ""}) {
  return <svg className={("icon " + className).trim()} data-icon={name}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {shapes[name]}
  </svg>;
}
