import React from 'react'
import { Link } from 'react-router-dom'

class HighScoreButton extends React.Component{
    render(){
        return(
            <Link to="/high-scores" >View High Scores</Link>
        )
    }
}

export default HighScoreButton