/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If index.html is under the public directory
    "./src/**/*.{js,ts,jsx,tsx,html}", // Ensure this is pointing to the correct folder
  ],
  theme: {
    extend: {
    },
  },
};
