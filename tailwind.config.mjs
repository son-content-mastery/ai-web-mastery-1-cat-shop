/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        surface: '#fcf8fb',
        'surface-lowest': '#ffffff',
        'surface-low': '#f6f3f5',
        'surface-container': '#f0edef',
        'surface-high': '#eae7ea',
        'surface-highest': '#e4e2e4',
        ink: '#1b1b1d',
        muted: '#5c403b',
        primary: '#b50c08',
        'primary-container': '#d92d20',
        'primary-soft': '#fff0ed',
        outline: '#906f6a',
        'outline-soft': '#e5bdb7',
        line: '#06c755',
        success: '#006e2b',
        error: '#ba1a1a'
      },
      fontFamily: {
        display: ['IBM Plex Sans Thai', 'Noto Sans Thai', 'Tahoma', 'sans-serif'],
        body: ['Noto Sans Thai', 'Tahoma', 'sans-serif']
      },
      maxWidth: { site: '1280px', article: '760px' },
      boxShadow: {
        ambient: '0 2px 4px rgba(27,27,29,.04)',
        lift: '0 8px 16px rgba(27,27,29,.12)',
        line: '0 4px 14px rgba(6,199,85,.39)'
      }
    }
  },
  plugins: []
};
