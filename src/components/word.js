import React from 'react'

class Word extends React.Component{

    render(){
        return(
            <div>
                {this.props.split ? 
                    this.props.split.map(letter => {
                        return this.props.chosenLetters.includes(letter) ?
                         <span>{letter} </span> : <span>_ </span>
                        })
                : null}
            </div>
        )
    }
}

export default Word