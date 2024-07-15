import express from 'express'
import url from 'node:url'
import path from 'node:path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express()

const staticFolder = path.join(__dirname, 'ssr/client')
const base = process.env.BASE || '/'

const startServer = async() => {
    let vite = null
    const sirv = (await import('sirv')).default
    app.use(base, sirv(staticFolder, {extensions: []}))

    if(process.env.DEV_SERVER){
        const { createServer } = await import('vite')
        vite = await createServer({
            server: { middlewareMode: true },
            appType: 'custom',
            base: base
        })
        app.use(vite.middlewares)
    }

    const serverPort = process.env.PORT || 3000

    app.use('*', async (req, res) => {
        let Renderer
        if(vite){
            //dev mode
            const { Renderer: _Rendrer } = (await vite.ssrLoadModule('/src/server-files/renderer.jsx'))
            Renderer = _Rendrer
        } else {
            const mod = (await import('./ssr/server/main.js'))
            Renderer = mod.renderer
        }
        Renderer(req, res)
    })

    app.listen(serverPort, '0.0.0.0', () => {
        console.log(`Server started at http://localhost:${serverPort}`)
    })
}

startServer()