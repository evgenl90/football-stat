import {combineReducers, createStore} from 'redux'
import commandListReducer from './command-list-reducer'
import leagueListReducer from './league-list-reducer'
import teamCalendarReducer from './team-calendar-reducer'
import leagueCalendarReducer from './league-calendar-reducer'


let reducers = combineReducers({
    commandListPage: commandListReducer,
    leagueListPage: leagueListReducer,
    teamCalendarPage: teamCalendarReducer,
    leagueCalendarPage: leagueCalendarReducer
})

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store