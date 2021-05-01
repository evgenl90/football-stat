import React from 'react'
import { NavLink } from 'react-router-dom'

const CommandListItem = (props) => {
    let path = "/teamCalendar/" + props.id;
    return(    
        <NavLink to={path}>{props.name}</NavLink>         
    )
}

export default CommandListItem