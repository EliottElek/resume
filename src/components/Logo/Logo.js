import React from 'react'

const Logo = ({logoUrl}) => {
    return (
        <img width= "auto" height= '30px' style ={{borderRadius:"50%", marginLeft:"7px"}} src = {logoUrl} alt = "logo"/>
    )
}

export default Logo
