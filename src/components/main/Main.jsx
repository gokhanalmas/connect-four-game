import React from "react";
import LOGO from "../../assets/main-logo.png";
import CPUICON from "../../assets/cpu-icon.png";
import PLAYERICON from "../../assets/player-icon.png";
import { Link } from "react-router-dom";
import "./main.css";

const Main = ({ setCpu }) => {
  return (
    <div className='main__container buttons__container'>
      <div className='main__content'>
        <img src={LOGO} className='main__logo' alt='logo'></img>
        <Link
          to={"/game"}
          className='main__button button-pink'
          onClick={() => setCpu(true)}
        >
          Oyuncu vs AI{" "}
          <img
            src={CPUICON}
            className='button__icon cpu-icon'
            alt='cpu icon'
          ></img>
        </Link>
        <Link
          to={"/game"}
          className='main__button button-yellow'
          onClick={() => setCpu(false)}
        >
          Oyuncu vs Oyuncu{" "}
          <img
            src={PLAYERICON}
            className='button__icon player-icon'
            alt='player icon'
          ></img>
        </Link>
        <Link to={"/rules"} className='main__button button-withe'>
          Oyun Kuralları
        </Link>
      </div>
    </div>
  );
};

export { Main };
