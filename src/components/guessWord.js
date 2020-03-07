import React from 'react'

class GuessWord extends React.Component{
    render(){
        return(
            <div>
                <input type="text" /><input type="Submit" value="Guess" onClick={(event) => this.props.guessWord(event.currentTarget.previousElementSibling.value)}/>
            </div>
        )
    }
}

export default GuessWord