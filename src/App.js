import React from 'react';
import GuessWord from './components/guessWord'
import Letters from './components/letters'
import Man from './components/man'
import Word from './components/word'
import _ from 'underscore'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      word: "",
      splitWord: "",
      randomizedLetters: "",
      chosenLetters: []
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
        word: wordArray[0],
        splitWord: wordArray[0].split("")
      },()=>{
        this.randomizedLetters()
      })
    })
  }

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  randomizedLetters = () => {
    let newArray = [...this.state.splitWord]

    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let getRandomLetter = function(){ newArray.push(alphabet[Math.floor(Math.random() * (alphabet.length - 1)) ]) }

    _.times(20, getRandomLetter )

    // console.log(this.shuffle(_.uniq(newArray)))
    this.setState({randomizedLetters: this.shuffle(_.uniq(newArray))})

  }

  guessWord = (event) => {
    console.log(event)
  }

  chooseLetters = (event) => {
    this.setState({
        chosenLetters: [...this.state.chosenLetters, event.target.innerText]
    })
    console.log(event.target.innerText)
  }

  render(){
    return(
      <div>
        <GuessWord guessWord={this.guessWord} />
        <Letters letters={this.state.randomizedLetters} chooseLetters={this.chooseLetters} />
        <Man/>
        <Word word={this.state.word} split={this.state.splitWord} chosenLetters={this.state.chosenLetters}/>
      </div>
    )
  }
}

export default App;
