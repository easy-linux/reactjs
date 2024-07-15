import React from 'react'
import ReactDomServer from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server'
import routes from '@/routes/router'
import Html from '@/containers/Html'


function createFetchRequest(req, res) {
    let origin = `${req.protocol}://${req.get("host")}`;
    let url = new URL(req.originalUrl || req.url, origin);
    
    let controller = new AbortController();
    res.on("close", () => controller.abort());
    
    let headers = new Headers();
    
    for (let [key, values] of Object.entries(req.headers)) {
        if (values) {
            if (Array.isArray(values)) {
                for (let value of values) {
                    headers.append(key, value);
                }
            } else {
                headers.set(key, values);
            }
        }
    }
    
    let init = {
        method: req.method,
        headers,
        signal: controller.signal,
    };
    
    if (req.method !== "GET" && req.method !== "HEAD") {
        init.body = req.body;
    }
    
    return new Request(url.href, init);
}


export const Renderer = async (req, res) => {
    try{
        const { query, dataRoutes } = createStaticHandler(routes)
        const fetchRequest = createFetchRequest(req, res)
        const context = await query(fetchRequest)
        if(context instanceof Response){
            throw context
        }
        const router = createStaticRouter(dataRoutes, context)
        const headers = {}
        const { pipe } = ReactDomServer.renderToPipeableStream(<Html headers={headers}>
            <StaticRouterProvider router={router} context={context} />
        </Html>, {
            bootstrapModules: ['/main.js'],
            onShellReady(){
                res.setHeader('content-type', 'text/html')
                pipe(res)
            }
        })
    } catch(e){
        console.error(e)
    }
}

