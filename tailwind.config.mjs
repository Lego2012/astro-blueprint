/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   // Mit darkMode wird Tailwind mitgeteilt, dass es eine Klasse für den Dark Mode generieren soll.
   darkMode: "class",
   // Mit theme.extent kann das Standard-Theme von Tailwind erweitert werden. z.B. um eigene Farben. Tailwind generiert dann automatisch alle passenden Klassen (z.B. text-light, bg-light, border-light usw...).
   theme: {
      extend: {
         colors: {
            light: "#f5f5f5",
            dark: "#1b1b1b",
         },
      },
   },
   plugins: [],
}
