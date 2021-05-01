const SET_COMMAND_LIST = 'SET-COMMAND-LIST'
const SEARCH_TEAM = 'SEARCH-TEAM'


let initialState = {
    commandList: [],
    search: ''
}

const commandListReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_COMMAND_LIST:
            return {
                ...state,
                commandList: action.commandList
            }
        case SEARCH_TEAM:
            return{
                ...state,
                search: action.newText
            }
        default: 
            return state
    }
  
}

//создаем action creator
export const setCommandList = (commandList) => ({type: SET_COMMAND_LIST, commandList})
export const updateSearchTeam = text => ({type: SEARCH_TEAM, newText: text})

export default commandListReducer