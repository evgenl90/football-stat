import React from 'react'
import s from './commandList.module.css'
import CommandListItem from './CommandListItem';


let CommandList = (props) => {
    let serialNumber = 1;
    
    return (
        <div className={s.block}>
            <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Наименование команды</th>
                <th scope="col">Страна</th>
                <th scope="col">Цвет клуба</th>
            </tr>
            </thead>
            <tbody>
                
                    {                    
                        props.commandList.map(team => <tr key={team.id} > 
                            <th scope="row">{serialNumber++}</th>
                            <td><CommandListItem id={team.id} name={team.name} /></td>
                            <td>{team.area.name}</td>
                            <td>{team.clubColors}</td>
                            
                        </tr>)
                    }
                
            </tbody>
        </table>
      </div>
    )
}

export default CommandList