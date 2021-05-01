import React from 'react'


let SearchInput = (props) => {
    return(
        <form className="d-flex" onSubmit={props.handleSubmit}>
            <input className="form-control me-2" 
                    type="text" 
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={props.handleChange} />

            <button className="btn btn-outline-success" 
                    type="submit" >
                Search
            </button>
        </form>
    )
}

export default SearchInput