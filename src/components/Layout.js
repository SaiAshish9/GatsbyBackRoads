import React from 'react'

// import '../sass/index.scss'

import './layout.css'

import {Navbar} from './navbar'

import {Footer} from './footer'

export const Layout = (props) => {
    return (
    <main>
<Navbar/>
{props.children}
<Footer/>
    </main>
    )
}
