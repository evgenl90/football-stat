import React, {Component} from 'react'
import { connect } from 'react-redux'

import {TOKEN} from '../../config';
import { setTeamCalendar, updateSearchTeamCalendar } from '../../redux/team-calendar-reducer'
import SearchInputDate from './SearchInputDate'

class TeamDateSearch extends Component {
    constructor(props){
        super(props)
           
        this.state = {
            valueDateFrom: '',
            valueDateTo: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this)
        this.handleChangeDateTo = this.handleChangeDateTo.bind(this)
    }


    handleChangeDateFrom(event){
        this.setState({
            valueDateFrom: event.target.value
        })
    }
    handleChangeDateTo(event){ 
        this.setState({
            valueDateTo: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.searchDate(this.state.valueDateFrom, this.state.valueDateTo)

        let queryParam;
        if(this.state.valueDateFrom && this.state.valueDateTo){
            queryParam = '?dateFrom=' + this.state.valueDateFrom + '&dateTo=' + this.state.valueDateTo
        } else if(this.state.valueDateFrom && !this.state.valueDateTo) {
            queryParam = '?dateFrom="' + this.state.valueDateFrom +'"'
        } else if(!this.state.valueDateFrom && this.state.valueDateTo){
            queryParam = '?dateTo=' + this.state.valueDateTo
        } else {
            queryParam = ''
        }
        
        let strGET = window.location.pathname.replace( 'teamCalendar/', '')

        try {
            fetch("https://api.football-data.org/v2/teams"+strGET+
            "/matches" + queryParam, 
            {
                headers: { 
                    'X-Auth-Token': TOKEN,
                    
                },
                method: "get",
                dataType: 'json'
                
            }).then((response) => {
                return response.json();
            }).then(data => {
                
                /*let matchesFiltered = data.matches.filter(matches => {
                    return (new Date(matches.season.startDate) < new Date(this.state.valueDateFrom) && 
                    new Date(this.state.valueDateTo) > new Date(matches.season.endDate));
                })*/
                
                this.props.setTeamCalendar(data.matches)

                var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                var newUrl = baseUrl + '/' + queryParam;
                window.history.pushState(null, null, newUrl);
            })
        } catch(err) {
            console.log('error', err)
        }
        
    }
   
    render() {
        return(
            <SearchInputDate handleSubmit={this.handleSubmit} 
                             handleChangeDateFrom={this.handleChangeDateFrom}
                             handleChangeDateTo={this.handleChangeDateTo} />
        )
    }
} 

let mapStateToProps = (state) => {
    return{
        teamCalendar: state.teamCalendarPage.teamCalendar,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        searchDate: (dateFrom = '', dateTo = '') => {
            dispatch(updateSearchTeamCalendar(dateFrom, dateTo))
        },
        setTeamCalendar: (matches) => {
            dispatch(setTeamCalendar(matches))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDateSearch)