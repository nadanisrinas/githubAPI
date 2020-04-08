import React from 'react'
import ReactDOM from 'react-dom'

class Search extends React.Component{
    render(){
        return(
            <form className="input-group mb-3">
                <input type="text" className="form-control" placeholder="" onChange= {(e) => {console.log(e.target.value)}}/>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Search</button>
                </div>
            </form>
        );
    };
}

export default Search;
