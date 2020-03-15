import React from 'react'

class HighScores extends React.Component{
    constructor(){
        super();
        this.state={
            users: ""
                }
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/allplayers')
        .then(respsonse => respsonse.json())
        .then(usersArray => {
            this.setState({
                users: usersArray
            })
        })
    }

    render(){
        return(
            <div>
                <h2>High Scores</h2>
                {this.state.users ? 
                    this.state.users.map((user)=>{
                        return <div>{user.initials} : Level {user.level}</div>
                    })
                : null}
            </div>
        )
    }
}

export default HighScores