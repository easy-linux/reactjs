import React from 'react'
import Meta from "@containers/Meta.jsx";

export default ({ children, headers }) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport"
                  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=3,user-scalable=0,minimal-ui, viewport-fit=cover"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="format-detection" content="telephone=no"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="icon" type="image/png" href="/favicon.png"/>
            <Meta headers={headers} />
            <link rel="stylesheet" crossOrigin="" href="/assets/index.css" />
        </head>
        <body>
        <div id="app">{children}</div>
        </body>
        </html>
    )
}
