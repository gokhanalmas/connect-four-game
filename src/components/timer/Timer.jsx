import React, {useEffect} from 'react'
import TIMER1 from '../../assets/timer-1.png'
import TIMER2 from '../../assets/timer-2.png'
import './timer.css'

const Timer = ({player, timerCounter, setTimerCounter, setWhoWins, pause, cpu}) => {

   useEffect(() => {
     const timer =
     !pause && timerCounter > 0 && setInterval(() => setTimerCounter(timerCounter - 1), 1000)
     timerCounter === 0 && player === 1 && setWhoWins(2, false)
     timerCounter === 0 && player === 2 && setWhoWins(1, false)

     return () => clearInterval(timer)
      //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [timerCounter, pause])

  return (
    <div
      className={player === 1 ? "timer__container" : "timer__container timer-2"}
    >
      <div
        className='timer'
        style={
          player === 1
            ? { backgroundImage: `url(${TIMER1})` }
            : { backgroundImage: `url(${TIMER2})` }
        }
      >
        <h3>
          {player === 1
            ? `OYUNCU 1'İN SIRASI`
            : cpu
            ? `AI'IN SIRASI`
            : `OYUNCU 2'NİN SIRASI`}
        </h3>

        <p>{`${timerCounter}s`}</p>
      </div>
    </div>
  );
}

export {Timer}