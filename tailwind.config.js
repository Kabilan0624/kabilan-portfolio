/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: '#0C0D12',
        surface: '#161822',
        surfaceLight: '#1F2230',
        surfaceHover: '#25293A',
        accent: '#FF5E1E',
        accentHover: '#FF753A',
        accentMuted: 'rgba(255, 94, 30, 0.15)',
        accentGlow: 'rgba(255, 94, 30, 0.35)',
        borderDark: '#262938',
        borderLight: '#32374A',
        textPrimary: '#F3F4F6',
        textSecondary: '#9CA3AF',
        textMuted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px rgba(255, 94, 30, 0.35)',
        'glow-orange-sm': '0 0 12px rgba(255, 94, 30, 0.25)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
