import React from 'react'
import SideNav from 'react-simple-sidenav'
import SidenavItems from './SidenavItems'

export default function Nav(props) {
    return (
        <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background: '#242424',
                maxwidth:"220px"
            }}
        >
            <SidenavItems/>
        </SideNav>
    )
}
