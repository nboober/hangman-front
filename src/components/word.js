import React from 'react'

class Word extends React.Component{

    componentDidUpdate = () => {
        this.checkWordForWin()
    }

    checkWordForWin = () => {
        let word = document.getElementById("word").children;
        let underspace = "_ ";
        let under = "_"
        let count = 0;

        for (let i = 0; i < word.length; i++){
            if(word[i].innerText === underspace || word[i].innerText === under){
                count++
            }
        }

        if(count === 0){
            this.props.win()
        }
    }

    render(){
        return(
            <div id="word">
                {this.props.split ? 
                    this.props.split.map((letter, index) => {
                        return this.props.chosenLetters.includes(letter) ?
                    <span key={index}>{letter} </span> : <span key={index}>_ </span>
                        })
                : null}
            </div>
        )
    }
}

export default Word