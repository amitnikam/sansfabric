import React from 'react'
import Header from './header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'

export default function Layout({children}) {
    return (
        <div className='container'>
            <Header/> {children}
            <Footer/>
        </div>
    )
}
