import React from 'react'

class Profile extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="profile-photo">
                        <img src={this.props.userProfileAvatar}></img>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="profile-data">
                        <ul>
                             <li className="username">{this.props.userName}</li>
                             <div className="reposList">
                             {this.props.repoList}
                             </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
