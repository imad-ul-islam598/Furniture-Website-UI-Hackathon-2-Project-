import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
