import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import shuffle from 'lodash.shuffle'
import cardArray from './components/CardInfo'
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  

  function onCardClick(e){
    if (gameOver === false){
      if (clickedCards.includes(e)) {
        console.log('Already Clicked');
        setGameOver(true);
      }
      else{ 
        incrementScore();
        setClickedCards(clickedCards.concat(e));
        checkWin();
      }
    }
  }

  function incrementScore() {
    setCurrentScore(currentScore + 1);
    checkBestScore();
  }

  function checkBestScore() {
    if (currentScore >= bestScore) {
      setBestScore(bestScore + 1);
    }
  }

  function checkWin() {
    if (currentScore + 1 === listItems.length){
      setGameWon(true);
      setGameOver(true);
    }
  }

  function resetGame() {
    setCurrentScore(0);
    setClickedCards([]);
    setGameOver(false);
    setGameWon(false);
  }

  let gameOverText = 'Game Over, you already clicked that one';

  if (gameWon) {
    gameOverText = 'Congratulations, you won!'
  }

  const listItems = cardArray().map((item) => <li key={item.name} ><Card onCardClick={onCardClick} name={item.name} src={item.src} /></li>);

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div>
        <ul className='card-container'>{shuffle(listItems)}</ul>
      </div>
      <div className='game-over'>
        {gameOver && gameOverText}
      </div>      
      <div className="card">
        <button onClick={resetGame}>
          {!gameOver && 'Reset'}
          {gameOver && 'Play Again'}
        </button>
      </div>
      
      
    </div>
  )
}

export default App
