/* ──────────────────────────────────────────────────
   TAILWIND CONFIGURATION
   ────────────────────────────────────────────────── */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020817',
          900: '#0a0f1e',
          800: '#0d1426',
          700: '#111d35',
          600: '#162040',
          500: '#1e3a5f',
        },
        vault: {
          blue:   '#3b82f6',
          glow:   '#60a5fa',
          green:  '#22c55e',
          amber:  '#f59e0b',
          red:    '#ef4444',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      }
    }
  }
}
