import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import config from './app.config.ts'

const description = `Kom til sankthans i børnehøjde ${config.dateTime.formatted.date} kl. ${config.dateTime.formatted.startTime} på Naturlegepladsen i lergravene i Nivå. Bålet tændes kl. ${config.dateTime.formatted.fireTime}.`

function metaDescriptionPlugin() {
  return {
    name: 'inject-meta-description',
    transformIndexHtml(html) {
      return html.replace(
        '<meta name="viewport"',
        `<meta name="description" content="${description}">\n    <meta name="viewport"`
      )
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    metaDescriptionPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
