import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as OK } from "../../assets/ok.svg";
import "./rules.css";

const Rules = () => {
  return (
    <div className='rules__container'>
      <div className='rules__content'>
        <h1>KURALLAR</h1>

        <h2>AMAÇ</h2>
        <p>
          Aynı renkteki 4 diski dikey, yatay veya çapraz olarak bir sıra haline
          getirerek ilk oyuncu olmak.
        </p>

        <h2>NASIL OYNANIR</h2>
        <ol>
          <li>
            {" "}
            <span> 1 </span> İlk oyunda Kırmızı başlar.
          </li>
          <li>
            {" "}
            <span> 2 </span> Oyuncular sırayla oynar ve her turda yalnızca bir
            disk bırakabilirler.
          </li>
          <li>
            {" "}
            <span> 3 </span> Oyun, 4'lü bir sıra yapıldığında veya oyun berabere
            kaldığında sona erer.
          </li>
          <li>
            {" "}
            <span> 4 </span> Önceki oyunun başlangıcını yapan oyuncu, bir
            sonraki oyunda ikinci sırada oynar.
          </li>
        </ol>

        <Link to='/' className='ok-button'>
          <OK height='100%' width='100%' />
        </Link>
      </div>
    </div>
  );
};

export { Rules };
