import React from 'react'
import { connect } from 'react-redux'

import {TOKEN} from '../../config';
import LeagueCalendar from './LeagueCalendar'
import {setLeagueCalendarMatches } from '../../redux/league-calendar-reducer'
import LeagueDateSearch from '../Search/LeagueDateSearch'

class LeagueCalendarContainer extends React.Component {

    componentDidMount() {
        let strGET = window.location.pathname.replace( 'leagueCalendar/', '')
        let queryStr;
        if(window.location.search.replace( '?', '')){
            queryStr = 'https://api.football-data.org/v2/competitions'+ strGET +'/matches?' + window.location.search.replace( '?', '')
        } else {
            queryStr = 'https://api.football-data.org/v2/competitions'+ strGET +'/matches'
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
                this.props.setLeagueCalendarMatches(data.matches)
            })
        } catch(err) {
            console.log('error', err);
        }
                  
    }
    
    render() {
        
        return(
            <>
                <LeagueDateSearch />
                <LeagueCalendar leagueCalendarMatches={this.props.leagueCalendarMatches} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        leagueCalendarMatches: state.leagueCalendarPage.leagueCalendarMatches, 
    }
}

export default connect(mapStateToProps, {
    setLeagueCalendarMatches
})(LeagueCalendarContainer)