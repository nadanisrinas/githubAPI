import React,{Component} from 'react'
import axios from 'axios'
import Search from './search'
import Navbar from './navbar'
import Card from './card'
import Profile from './profile'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userProfileAvatar : '',
            userName : '',
            repoList : ''
        }
    }
    

    onSearchSubmit = async term => {
        console.log(term);
        await axios.all([
            axios.get(`https://api.github.com/users/${term}`),
            axios.get(`https://api.github.com/users/${term}/repos`)

        ]).then(axios.spread((user,repos) => {
            let userData = user.data;
            let reposData = repos;
            console.log(reposData.data.length);
            let reposList = [];
            for(let i = 0, l = reposData.data.length; i < l; i++) {
                reposList.push(reposData.data[i]["name"]);
            }
            this.setState({userProfileAvatar : userData.avatar_url});
            this.setState({userName : userData.login});
            this.setState({repoList : reposList.join(",")});
            
        })).catch(err => {
            alert(`username ${term} tidak ditemukan ${err}`);
        });
    }
    render(){
        return(
            <div>
                <Navbar/>
                <Card>
                    <p className="card-title">Github Repository</p>
                    <Search onSubmit={this.onSearchSubmit}/>
                    <Profile userProfileAvatar = {this.state.userProfileAvatar}
                            userName = {this.state.userName}
                            repoList = {this.state.repoList}
                    />
                </Card>
            </div>
        
        );
    }
    
}

export default App;