const SET_LEAGUE_CALENDAR_MATCHES = 'SET-LEAGUE-CALENDAR-MATCHES'
const SEARCH_LEAGUE_DATE = 'SEARCH-LEAGUE-DATE'
const SEARCH_BY_YEAR = 'SEARCH-BY-YEAR'
//const SET_LEAGUE_CALENDAR_COMPETITION = 'SET-LEAGUE-CALENDAR-COMPETITION'


let initialState = {
    leagueCalendarMatches: [],
    searchByYear: ''
    //leagueCalendarCompetition: []
}

const leagueCalendarReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_LEAGUE_CALENDAR_MATCHES:
            return {
                ...state,
                leagueCalendarMatches: action.leagueCalendarMatches,
            }
        case SEARCH_LEAGUE_DATE:
            return {
                ...state,
                valueDateFrom: action.valueDateFrom,
                valueDateTo: action.valueDateTo
            }
        case SEARCH_BY_YEAR:
        return {
            ...state,
            searchByYear: action.searchByYear
        }
            /*case SET_LEAGUE_CALENDAR_COMPETITION:
            return {
                ...state,
                leagueCalendarCompetition: action.leagueCalendarCompetition
            }*/
        default: 
            return state
    }
  
}

//создаем action creator
export const setLeagueCalendarMatches = (leagueCalendarMatches) => ({type: SET_LEAGUE_CALENDAR_MATCHES, leagueCalendarMatches})
export const updateSearchLeagueCalendar = (dateFrom, dateTo) => ({type: SEARCH_LEAGUE_DATE, dateFrom, dateTo})
export const updateSearchByYear = searchByYear => ({type: SEARCH_BY_YEAR, searchByYear})
//export const setLeagueCalendarCompetition = (leagueCalendarCompetition) => ({type: SET_LEAGUE_CALENDAR_COMPETITION, leagueCalendarCompetition})


export default leagueCalendarReducer