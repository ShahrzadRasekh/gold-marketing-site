/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // safe extras
    './src/**/*.{js,ts,jsx,tsx,mdx}', // safe extras
  ],
  theme: { extend: {} },
  plugins: [],
};
