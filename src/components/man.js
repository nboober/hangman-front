import React from 'react'

class Man extends React.Component{
    render(){
        return(
            <div>
                <img src={require(`../images/${this.props.images[0]}`)} alt="hangman image" />
            </div>
        )
    }
}

export default Man