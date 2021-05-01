import React, {Component} from 'react'
import { connect } from 'react-redux'

import {TOKEN} from '../../config';
import {updateSearchTeam, setCommandList} from '../../redux/command-list-reducer'
import SearchInput from './SearchInput'

class SearchInputTeam extends Component {
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
        this.props.searchTeam(this.state.value)
        try {
            fetch('https://api.football-data.org/v2/teams/', 
            {
                headers: { 
                    'X-Auth-Token': TOKEN,
                    
                },
                method: "get",
                dataType: 'json'
                
            }).then((response) => {
                return response.json();
            }).then(data => {
                let teamsFiltered = data.teams.filter(team => {
                    return team.name.toLowerCase().indexOf(this.state.value.toLocaleLowerCase()) !== -1
                })
                this.props.setCommandList(teamsFiltered)
                
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
        commandListPage: state.commandListPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        searchTeam: (text) => {
            dispatch(updateSearchTeam(text))
        },
        setCommandList: (teams) => {
            dispatch(setCommandList(teams))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputTeam)