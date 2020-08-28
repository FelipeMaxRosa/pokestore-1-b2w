import React from "react";
import "./styles.css";
import logo from "../../assets/pokeball.png";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <h1 className="title">PokeStore -Fire / Water</h1>
      <div className="header">
        <img id="logo" src={logo} alt="pokestore" />
        <input type="text" placeholder="Qual pokemon voce procura?" />
        <div className="user">
          <h3 className="user">Seja Bem-vindo Treinador!</h3>
          <FiUser className="user-logo" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Header;
