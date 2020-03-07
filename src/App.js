import React from 'react';
import GuessWord from './components/guessWord'
import Letters from './components/letters'
import Man from './components/man'
import Word from './components/word'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      word: ""
    }
  }

  componentDidMount = () => {

    this.fetchNewWord()
  
  }
  
  fetchNewWord = () => {
    fetch("http://localhost:3000/word")
    .then(response => response.json())
    .then(wordArray => {
      this.setState({
        word: wordArray[0]
      })
    })
  }

  guessWord = (event) => {
    console.log(event)
  }

  render(){
    return(
      <div>
        <GuessWord guessWord={this.guessWord} />
        <Letters/>
        <Man/>
        <Word/>
      </div>
    )
  }
}

export default App;
