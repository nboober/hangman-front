import React from 'react';
import Level from './components/level'
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
      level: 0,
      word: "",
      splitWord: "",
      randomizedLetters: "",
      chosenLetters: [],
      hangmanImages: ["hangman0.jpg","hangman1.jpg","hangman2.jpg","hangman3.jpg","hangman4.jpg","hangman5.jpg","hangman6.jpg"],
      incorrectGuessNumber: 0
    }
  }

  componentDidMount = () => {

    this.fetchNewWord()
  
  }
  
  fetchNewWord = () => {

    let index = Math.floor(Math.random() * 50)

    fetch("http://localhost:3000/word")
    .then(response => response.json())
    .then(wordArray => {
      this.setState({
        word: wordArray[index],
        splitWord: wordArray[index].split(""),
        chosenLetters: [],
        incorrectGuessNumber: 0,
        level: this.state.level += 1
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

    if(event.toLowerCase() === this.state.word){

      this.win()

    }else{

      let incorrect = ++this.state.incorrectGuessNumber

      console.log("Incorrect");
      
      this.setState({
        incorrectGuessNumber: incorrect
      })

      if(incorrect === 6){
        this.lose()
      }

    }
  }

  chooseLetters = (event) => {
    if(this.state.word.includes(event.target.innerText)){
      
      this.setState({
          chosenLetters: [...this.state.chosenLetters, event.target.innerText]
      })

    }else{

      let incorrect = ++this.state.incorrectGuessNumber

      console.log("Incorrect");

      this.setState({
        chosenLetters: [...this.state.chosenLetters, event.target.innerText],
        incorrectGuessNumber: incorrect
      })

      if(incorrect === 6){
        this.lose()
      }

    }
  }

  win = () => {
    console.log(`You Won!! \n The word was ${this.state.word}`)
    console.log(`Next Level is Level ${this.state.level + 1}`)
    this.fetchNewWord();
  }
  
  lose = () => {
    console.log("You Lose")
    console.log(`The word was ${this.state.word}`)
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  }

  render(){
    return(
      <div>
        <Level level={this.state.level} />
        <GuessWord guessWord={this.guessWord} />
        <Letters letters={this.state.randomizedLetters} chooseLetters={this.chooseLetters} />
        <Man images={this.state.hangmanImages} incorrectNumber={this.state.incorrectGuessNumber}/>
        <Word word={this.state.word} split={this.state.splitWord} chosenLetters={this.state.chosenLetters} win={this.win}/>
      </div>
    )
  }
}

export default App;
