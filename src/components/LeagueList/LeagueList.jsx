import React from 'react'
import s from './leagueList.module.css'
import LeagueListItem from './LeagueListItem';


let LeagueList = (props) => {
    let serialNumber = 1;
    return (
        <div className={s.block}>
            <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Наименование лиги</th>
                <th scope="col">Код лиги</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.leagueList.map(league => <tr key={league.id} >
                        <th scope="row">{serialNumber++}</th>
                        <td><LeagueListItem id={league.id} name={league.name} /></td>
                        <td>{league.code}</td>
                    </tr>)
                }
            </tbody>
        </table>
      </div>
    )
}

export default LeagueList