import React,{Component} from 'react'
import ReactDOM from'react-dom'
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
    

    onSearchSubmit(term){
        console.log(term);
        axios.get(`https://api.github.com/users/${term}`)
        .then(resolve => {
            let user = resolve.data;
            if (this.setState) {
                this.setState({userProfileAvatar : user.avatar_url});
            this.setState({userName : user.userName});
              }
        })
            
        axios.get(`https://api.github.com/users/${term}/repos`)
            .then(response => {
                let repos = response.data;
                repos.forEach(item => {
                    if (this.setState) {
                        this.setState({repoList : item.name});
                        console.log('adaaaa');
                }
                });
            })
            .catch((response => {
                alert(`username ${term} tidak ditemukan`)
            }));
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