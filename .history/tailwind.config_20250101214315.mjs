/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'typing': 'typing 3s steps(20) 1s forwards', // Adjust steps based on text length
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
