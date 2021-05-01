import React from 'react'
import { connect } from 'react-redux' 
import TeamCalendar from './TeamCalendar'

import {TOKEN} from '../../config';
import {setTeamCalendar} from '../../redux/team-calendar-reducer'
import TeamDateSearch from '../Search/TeamDateSearch'

class TeamCalendarContainer extends React.Component {

    componentDidMount() {
        let strGET = window.location.pathname.replace( 'teamCalendar/', '')
        
        let queryStr;
        if(window.location.search.replace( '?', '')){
            queryStr = 'https://api.football-data.org/v2/teams'+strGET+'/matches/?' + window.location.search.replace( '?', '')
        } else {
            queryStr = 'https://api.football-data.org/v2/teams'+strGET+'/matches/'
        }
        try {
            fetch(queryStr, 
            {
                headers: { 
                    'X-Auth-Token': TOKEN,
                    
                },
                method: "get",
                dataType: 'json'
                
            }).then((response) => {
                return response.json();
            }).then(data => {
                this.props.setTeamCalendar(data.matches)
            })
        } catch(err) {
            console.log('error', err)
        }
                
    }
   
    
    render() {
        return(
            <>
                <TeamDateSearch />
                <TeamCalendar teamCalendar={this.props.teamCalendar} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        teamCalendar: state.teamCalendarPage.teamCalendar,
    }
}

export default connect(mapStateToProps, {
    setTeamCalendar
})(TeamCalendarContainer)