import React from 'react'
import Header from '../components/header/header'

export default function Layout(props) {
    return (
        <div>
            <Header/>
            <div>
                {props.children}
            </div>
        </div>
    )
}
