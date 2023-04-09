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
  const [numCards, setNumCards] = useState(5)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [levelWon, setLevelWon] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
    if (clickedCards.length + 1 === pokeInfo.length && currentLevel === 10){
      setGameWon(true);
      setGameOver(true);
    } else if (clickedCards.length + 1 === pokeInfo.length && currentLevel < 10) {
      setGameOver(true);
      setLevelWon(true);
    }
  }

  function nextLevel() {
    setCurrentLevel(x => x + 1)
    setNumCards(x => x + 5)
    setClickedCards([])
    setGameOver(false)
    setLevelWon(false)
  }

  function resetGame() {
    setCurrentScore(0);
    setClickedCards([]);
    setGameOver(false);
    setGameWon(false);
    setCurrentLevel(1);
    setNumCards(5);
  }

  let gameOverText = 'Game Over, you already clicked that one';

  if (gameWon) {
    gameOverText = 'Congratulations, you won!'
  }

  if (levelWon) {
    gameOverText = 'Congratulations, you beat this level!'
    console.log('level won')
  }

  function GameOverButton(){
    if (levelWon) {
      return(
        <button onClick={nextLevel}>Next Level</button>
        )
      } else {
        return (
          <button onClick={resetGame}>Play Again</button>
        )
    }
  }

  useEffect(() => {
    setIsLoading(true)
    const getListItems = async () => {
    let newList = await cardArray(numCards)
    setPokeInfo([...newList])
    setIsLoading(false)
  }
  getListItems()
  }, [numCards])

  const cardList = pokeInfo.map((item) => <li key={item.name} ><Card onCardClick={onCardClick} name={item.name} src={item.src} /></li>);

  return (
    <div className="App">
      <Header currentScore={currentScore} currentLevel={currentLevel} bestScore={bestScore} />
      <div>
        {isLoading ? <div> Loading... </div> : <ul className='card-container'>{shuffle(cardList)}</ul>}
      </div>
      <div className='game-over' style={{display: gameOver ? 'flex' : 'none'}} >
        <div className="game-over-content">
          <p>{gameOverText}</p>
          <GameOverButton />
          {/* <button onClick={resetGame}>Play Again</button> */}
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
