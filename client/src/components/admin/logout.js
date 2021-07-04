import React from 'react'
import axios from 'axios';




export default function Logout(props) {

    console.log(props)
    let request = axios.get(`/api/logout`)
                    .then(request => {
                        setTimeout(() => {
                            props.history.push('/')
                        }, 2000);
                    })
    return (
        <div className="logout_container">
            <h2>
                Sorry to see you go
            </h2> 
        </div>
    )
}
