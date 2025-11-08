import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Import the tailwindcss plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    // Add the tailwindcss plugin here
    tailwindcss(),
  ],
})

content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
