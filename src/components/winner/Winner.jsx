import React from 'react'
import WINNER from '../../assets/winner.png'
import './winner.css'

const Winner = ({winner, playAgain, cpu}) => {

  return (
    <div className='winner__container'>
      <div className='winner' style={{ backgroundImage: `url(${WINNER})` }}>
        <h3>{winner === 1 ? `OYUNCU 1` : cpu ? "AI" : `OYUNCU 2`}</h3>
        <p>KAZANDI</p>
        <button className='game__button' onClick={() => playAgain(false)}>
          TEKRAR OYNA
        </button>
      </div>
    </div>
  );
}

export {Winner}