import React from 'react'
import { connect } from 'react-redux'

import {TOKEN} from '../../config';
import LeagueList from './LeagueList'
import {setLeagueList} from '../../redux/league-list-reducer'
import SearchInputLeague from '../Search/SearchInputLeague'


class LeagueListContainer extends React.Component {

    componentDidMount() {
        try {
            fetch('https://api.football-data.org/v2/competitions/?plan=TIER_ONE', 
            {
                headers: { 
                    'X-Auth-Token': TOKEN,
                    
                },
                method: "get",
                dataType: 'json'
                
            }).then((response) => {
                return response.json();
            }).then(data => { 
                this.props.setLeagueList(data.competitions)
            })
        } catch(err) {
            console.log('error', err)
        }
        
    }
   
    render() {
        return(
            <>
                <SearchInputLeague />
                <LeagueList leagueList={this.props.leagueList} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        leagueList: state.leagueListPage.leagueList,
    }
}

export default connect(mapStateToProps, {
    setLeagueList
})(LeagueListContainer)