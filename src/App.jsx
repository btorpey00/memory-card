import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import shuffle from 'lodash.shuffle'
import cardArray from './components/CardInfo'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [pokeInfo, setPokeInfo] = useState([])
  const [numCards, setNumCards] = useState(15)

  function onCardClick(e){
    if (gameOver === false){
      if (clickedCards.includes(e)) {
        setGameOver(true);
      }
      else{ 
        incrementScore();
        setClickedCards(clickedCards.concat(e));
        checkWin();
      }
    }
    console.log([...clickedCards, e])
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
    if (currentScore + 1 === pokeInfo.length){
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
  

  useEffect(() => {
    const getListItems = async () => {
    let newList = await cardArray(numCards)
    setPokeInfo([...newList])
  }
  getListItems()
  }, [numCards])

  const cardList = pokeInfo.map((item) => <li key={item.name} ><Card onCardClick={onCardClick} name={item.name} src={item.src} /></li>);

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div>
        <ul className='card-container'>{shuffle(cardList)}</ul>
      </div>
      <div className='game-over' style={{display: gameOver ? 'flex' : 'none'}} >
        <div className="game-over-content">
          <p>{gameOver && gameOverText}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      </div>      
      <div className="card">
        <button onClick={resetGame}>
          Reset
        </button>
      </div>
      
      
    </div>
  )
}

export default App
