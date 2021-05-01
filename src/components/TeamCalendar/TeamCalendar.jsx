import React from 'react'
import s from './teamCalendar.module.css'



let TeamCalendar = (props) => {
    
    return (
        <div className={s.block}>
            <h2>Календарь команды</h2>
            
                {
                    props.teamCalendar.map(calendar => 
                        <div className={s.calendar} key={calendar.id}>
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col-8 col-md-10 p-4 d-flex flex-column position-static">
                                    <div>
                                        <strong className="d-inline-block mb-2 text-primary">{calendar.awayTeam.name}</strong>
                                        <span>  (гость)</span>
                                        <strong className="d-inline-block mb-2 mx-3"> vs</strong>
                                        <strong className="d-inline-block mb-2 text-primary">{calendar.homeTeam.name}</strong>
                                        <span>  (хозяин)</span>
                                    </div>
                          
                                    <h3 className="mb-0">{calendar.competition.name}</h3>
                                    <div className="mb-1 text-muted">Дата проведения: <strong>{calendar.utcDate}</strong></div>
                                    <p className="card-text mb-auto">Страна проведения: <strong>{calendar.competition.area.name}</strong></p>
                                    <p className="card-text mb-auto">{calendar.status}</p>
                                </div>  
                                <div className={"col-4  col-md-2 " + s.score}>
                                    <div>
                                        <h3>{calendar.score.fullTime.awayTeam} : {calendar.score.fullTime.homeTeam}</h3>
                                        <strong>Победитель: {calendar.score.winner}</strong>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    )
                }
            
      </div>
    )
}

export default TeamCalendar