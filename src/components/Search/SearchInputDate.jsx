import React from 'react'


let SearchInputDate = (props) => {
    return(
        <form className="d-flex" onSubmit={props.handleSubmit}>
            <label htmlFor="dateFrom" className="mt-2">С</label>
            <input className="form-control mx-3" 
                    id='dateFrom'
                    type="date" 
                    placeholder="С" 
                    onChange={props.handleChangeDateFrom} 
                    required/>
            <label htmlFor="dateFrom" className="mt-2">По</label>
            <input className="form-control mx-3" 
                    id='dateTo'
                    type="date" 
                    placeholder="По" 
                    onChange={props.handleChangeDateTo} 
                    required />
            <button className="btn btn-outline-success" 
                    type="submit" >
                Search
            </button>
        </form>
    )
}

export default SearchInputDate