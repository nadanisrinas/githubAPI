import React from 'react'

class Search extends React.Component{
   state = {term : ''};

   onFormSubmit= (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
   }
   
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group mb-3">
                <input type="text" 
                className="form-control" 
                placeholder="" 
                value={this.state.term}
                onChange= {e => this.setState({term : e.target.value})}/>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Search</button>
                </div>
            </form>
        );
    };
}

export default Search;
