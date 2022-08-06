import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        target: "es2017",
        outDir: "build",
    },
    
    server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: true,
    },
    plugins: [
       react()
    ]
})