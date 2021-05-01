import React, {Component} from 'react'
import { connect } from 'react-redux'

import {TOKEN} from '../../config';
import {setLeagueCalendarMatches, updateSearchByYear} from '../../redux/league-calendar-reducer'


class SearchByYear extends Component {
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
        this.props.searchByYear(this.state.value)

        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        var newUrl = baseUrl + '?season=' + this.state.value;
        window.history.pushState(null, null, newUrl);

        let strGET = window.location.pathname.replace( 'leagueCalendar/', '')

        
        try {
            fetch('https://api.football-data.org/v2/competitions'+ strGET + '/matches' + '?season=' + this.state.value, 
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
            console.log('error', err)
        }
        
    }
   
    render() {
        return(
            <form className="d-flex" onSubmit={this.handleSubmit}>
                        <input className="form-control me-2" 
                                type="year" 
                                placeholder="YYYY" 
                                aria-label="Search"
                                maxLength="4"
                                
                                onChange={this.handleChange} />

                        <button className="btn btn-outline-success" 
                                type="submit" >
                            Search
                        </button>
                    </form>
        )
    }
} 

let mapStateToProps = (state) => {

    return{
        leagueCalendar: state.leagueCalendarPage.leagueCalendar,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        searchByYear: (text) => {
            dispatch(updateSearchByYear(text))
        },
        setLeagueCalendarMatches: (matches) => {
            dispatch(setLeagueCalendarMatches(matches))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchByYear)