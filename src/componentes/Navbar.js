import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = () => {
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={`${menuAtivo ? 'virarX1' : ''}`}></span>
          <span className={`${menuAtivo ? 'virarX2' : ''}`}></span>
          <span className={`${menuAtivo ? 'sumir' : ''}`}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/pagamento">Pagamento</Link>
        <Link onClick={fecharMenu} to="/carrinho">Carrinho</Link>
        <Link onClick={fecharMenu} to="/produtos">Produtos</Link>
        <Link onClick={fecharMenu} to="/cadastro">
                    <button>Cadastrar</button>
                </Link>
      </section>
    </div>
  );
};
export default Navbar;
