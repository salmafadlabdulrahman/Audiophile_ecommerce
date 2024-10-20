import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#191919',
        orange: '#d87d4a',
        gray: '#f1f1f1',
        darkgray: '#ffffff80',
      },
      screens: {
        'xs': '200px'
      }
    },

    
  },
  plugins: [],
};
export default config;
