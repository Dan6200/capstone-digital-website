//cspell:ignore Topbar
import React from 'react'
import { FlatMenu } from './menu/flat'
import { VertMenu } from './menu/vert'

const Navbar = ({ cancel }) => {
    return (
        <nav className="flex items-center justify-between w-full h-fit">
            <FlatMenu />
            <VertMenu cancel={cancel} />
        </nav>
    )
}

export default Navbar
