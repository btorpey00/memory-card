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
  

  function onCardClick(e){
    if (clickedCards.includes(e)) {
      console.log('Already Clicked');
      resetGame();
    }
    else{ 
      incrementScore();
      setClickedCards(clickedCards.concat(e));
      console.log(clickedCards);
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

  function resetGame() {
    setCurrentScore(0);
    setClickedCards([]);
  }

  const listItems = cardArray().map((item) => <li key={item.name} ><Card onCardClick={onCardClick} name={item.name} src={item.src} /></li>);

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div>
        <ul className='card-container'>{shuffle(listItems)}</ul>
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
