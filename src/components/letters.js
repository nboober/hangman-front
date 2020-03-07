import React from 'react'

class Letters extends React.Component{
    render(){
        return(
            <div>
                {this.props.letters ? 
                this.props.letters.map(letter => {
                    return letter
                }) : null}
            </div>
        )
    }
}

export default Letters