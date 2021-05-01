import React from 'react'
import { NavLink } from 'react-router-dom'

const LeagueListItem = (props) => {
    let path = "/leagueCalendar/" + props.id;
    return(    
        <NavLink to={path}>{props.name}</NavLink>         
    )
}

export default LeagueListItem