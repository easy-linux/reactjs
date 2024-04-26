import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default () => {
    return (
        <div className="app-container">
            <div className="toolbar">
                <Link to={'/'} className="toolbar-btn">Home</Link>
                <Link to={'/posts'} className="toolbar-btn">Posts</Link>
                <Link to={'/todos'} className="toolbar-btn">Tickets</Link>
            </div>
            <Outlet />
        </div>
    )
}
