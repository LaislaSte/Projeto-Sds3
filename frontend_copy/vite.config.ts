import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@components": `${__dirname}/src/components`,
      "@pages": `${__dirname}/src/pages`,
      "@assets": `${__dirname}/src/assets`,
      "@contexts": `${__dirname}/src/contexts`,
      "@hooks": `${__dirname}/src/hooks`,
      "@services": `${__dirname}/src/services`,
    }
  }

})
