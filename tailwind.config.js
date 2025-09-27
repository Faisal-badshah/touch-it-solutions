/** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",  // Scans all your React files for classes
     ],
     theme: {
       extend: {
         // Optional: Add your custom colors/fonts here if needed (e.g., for #E50914 red)
         colors: {
           'netflix-red': '#E50914',  // Reuse your custom red
         },
         fontFamily: {
           'inter': ['Inter', 'sans-serif'],  // Matches your Google Font
         },
       },
     },
     plugins: [],
   };
   
