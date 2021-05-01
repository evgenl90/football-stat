const SET_LEAGUE_LIST = 'SET-LEAGUE-LIST'
const SEARCH_LEAGUE = 'SEARCH-LEAGUE'

let initialState = {
    leagueList: [],
}

const leagueListReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_LEAGUE_LIST:
            return {
                ...state,
                leagueList: action.leagueList
            }
        case SEARCH_LEAGUE:
            return {
                ...state,
                search: action.newText
            }
        default: 
            return state
    }
  
}

//создаем action creator
export const setLeagueList = (leagueList) => ({type: SET_LEAGUE_LIST, leagueList})
export const updateSearchLeague = text => ({type: SEARCH_LEAGUE, newText: text})


export default leagueListReducer