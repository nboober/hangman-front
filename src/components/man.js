import React from 'react'

class Man extends React.Component{
    render(){
        return(
            <div>
                <img src={require(`../images/${this.props.images[this.props.incorrectNumber]}`)} alt="hangman" />
            </div>
        )
    }
}

export default Man