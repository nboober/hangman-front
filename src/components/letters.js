import React from 'react'

class Letters extends React.Component{
    render(){
        return(
            <div className="letters-container">
                {this.props.letters ? 
                this.props.letters.map(letter => {
                    return <span key={letter} className="letters" onClick={event => this.props.chooseLetters(event)} >{letter}</span>
                }) : null}
            </div>
        )
    }
}

export default Letters