import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CommandListContainer from './components/CommandList/CommandListContainer';
import LeagueListContainer from './components/LeagueList/LeagueListContainer';
import TeamCalendarContainer from './components/TeamCalendar/TeamCalendarContainer';
import LeagueCalendarContainer from './components/LeagueCalendar/LeagueCalendarContainer';



function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Navbar />

        <Route  path="/commandList" render={ () => <CommandListContainer />} />
        <Route  path="/leagueList" render={ () => <LeagueListContainer />} />
        
        <Route  path="/teamCalendar" render={ () => <TeamCalendarContainer />} />
        <Route  path="/leagueCalendar" render={ () => <LeagueCalendarContainer />} />
 
      </div>
    </BrowserRouter>
  );
}

export default App;
