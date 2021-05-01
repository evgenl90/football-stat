const SET_TEAM_CALENDAR = 'SET-TEAM-CALENDAR'
const SEARCH_DATE = 'SEARCH-DATE'

let initialState = {
    teamCalendar: [],
}

const teamCalendarReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_TEAM_CALENDAR:
            return {
                ...state,
                teamCalendar: action.teamCalendar
            }
        case SEARCH_DATE:
            return {
                ...state,
                valueDateFrom: action.valueDateFrom,
                valueDateTo: action.valueDateTo
            }
        default: 
            return state
    }
  
}

//создаем action creator
export const setTeamCalendar = (teamCalendar) => ({type: SET_TEAM_CALENDAR, teamCalendar})
export const updateSearchTeamCalendar = (dateFrom, dateTo) => ({type: SEARCH_DATE, dateFrom, dateTo})


export default teamCalendarReducer