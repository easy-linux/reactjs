import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

/**
 * See https://vitejs.dev/config for options.
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
    server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: true,
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'main.js',
                assetFileNames: 'assets/[name][extname]',
                manualChunks: undefined,
            }
        }
    },
    plugins: [
        legacy({
            modernPolyfills: [
                /* ... */
            ],
            renderLegacyChunks: false,
        }),
        react(),
        ViteAliases(),
    ],
})
