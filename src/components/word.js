import React from 'react'

class Word extends React.Component{

    render(){
        return(
            <div>
                {this.props.split ? 
                    this.props.split.map((letter, index) => {
                        return this.props.chosenLetters.includes(letter) ?
                         <span key={letter}>{letter} </span> : <span key={letter}>_ </span>
                        })
                : null}
            </div>
        )
    }
}

export default Word