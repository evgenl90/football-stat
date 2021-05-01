import React from 'react'
import { connect } from 'react-redux'

import {TOKEN} from '../../config';
import CommandList from './CommandList'
import {setCommandList} from '../../redux/command-list-reducer'
import SearchInputTeam from '../Search/SearchInputTeam'

class CommandListContainer extends React.Component {

    componentDidMount() {
       
        try {
            fetch('https://api.football-data.org/v2/teams?areas', 
            {
                headers: { 
                    'X-Auth-Token': TOKEN,
                    
                },
                method: "get",
                dataType: 'json'
                
            }).then((response) => {
                return response.json();
            }).then(data => {
                
                if(window.location.search.replace( '?like=', '')){
                    let teamsFiltered = data.teams.filter(team => {
                        return team.name.toLowerCase().indexOf(window.location.search.replace( '?like=', '').toLocaleLowerCase()) !== -1
                    })
                    this.props.setCommandList(teamsFiltered)
                } else {
                    this.props.setCommandList(data.teams)
                }
            })
        } catch(err) {
            console.log('error', err)
        }
                
    }

    render() {
        return(
            <>
                <SearchInputTeam />
                <CommandList commandList={this.props.commandList} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        commandList: state.commandListPage.commandList,
    }
}

export default connect(mapStateToProps, {
    setCommandList
})(CommandListContainer)