import React from 'react'

class Word extends React.Component{
    render(){
        return(
            <div>
                {this.props.split ? this.props.split.map(letter => {
                    return "_ "
                }) : null}
            </div>
        )
    }
}

export default Word