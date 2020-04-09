import React from 'react'
import ReactDOM from'react-dom'
import axios from 'axios'
import Search from './search'
import Navbar from './navbar'
import Card from './card'

class App extends React.Component{
    onSearchSubmit(term){
        console.log(term);
        axios.get(`https://api.github.com/users/${term}/repos`)
            .then((response => {
                let repos = response.data;
                repos.forEach(item => {
                    console.log(item.name);
                });
            }))
            .catch((response => {
                console.log(`username ${term} tidak ditemukan`)
            }));
    }
    render(){
        return(
            <div>
                <Navbar/>
                <Card>
                    <p className="card-title">Github Repository</p>
                    <Search onSubmit={this.onSearchSubmit}/>
                </Card>
            </div>
        
        );
    }
    
}

export default App;