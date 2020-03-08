import React from 'react'

class Letters extends React.Component{
    render(){
        return(
            <div>
                {this.props.letters ? 
                this.props.letters.map(letter => {
                    return <span key={letter} onClick={event => this.props.chooseLetters(event)} >{letter}</span>
                }) : null}
            </div>
        )
    }
}

export default Letters