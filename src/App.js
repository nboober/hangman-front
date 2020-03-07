import React from 'react';
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

  render(){
    return(
      <div>
        Main Component
      </div>
    )
  }
}

export default App;
