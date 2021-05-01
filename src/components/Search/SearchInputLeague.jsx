import React, {Component} from 'react'
import { connect } from 'react-redux'

import {TOKEN} from '../../config';
import {updateSearchLeague, setLeagueList} from '../../redux/league-list-reducer'
import SearchInput from './SearchInput'

class SearchInputLeague extends Component {
    constructor(props){
        super(props)
           
        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){ 
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.searchleague(this.state.value)

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
                let leagueFiltered = data.competitions.filter(team => {
                    return team.name.toLowerCase().indexOf(this.state.value.toLocaleLowerCase()) !== -1
                })
                this.props.setLeagueList(leagueFiltered)

                var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                var newUrl = baseUrl + '?like=' + this.state.value;
                window.history.pushState(null, null, newUrl);
            })
        } catch(err) {
            console.log('error', err)
        }
        
    }
   
    render() {
        return(
            <SearchInput handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        )
    }
} 

let mapStateToProps = (state) => {

    return{
        leagueListPage: state.leagueListPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        searchleague: (text) => {
            dispatch(updateSearchLeague(text))
        },
        setLeagueList: (league) => {
            dispatch(setLeagueList(league))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputLeague)