import React from 'react'

class Level extends React.Component{
    render(){
        return(
            <div>
                Level {this.props.level + 1}
            </div>
        )
    }
}

export default Level