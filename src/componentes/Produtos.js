import React, { useState, useEffect } from 'react';

import './Produtos.scss';



const Produtos = () => {
    const [numero,setNumero] = useState(0);

    const incrementar = () => {
        if (numero <10){
            setNumero(numero + 1);
        }
    }
    const descrementar = () => {
        if (numero > 0){
            setNumero(numero - 1)
        }
    }



    const [texto, setTexto] = useState("")

    useEffect(() => {
        if (localStorage.getItem("Name")) {
            const nomeLocal = localStorage.getItem("Name");
            setTexto(nomeLocal);
        }
    })
    return (
        <div className="Produtos">
            <h2>{`Seja bem vindo ${texto}`}</h2>
            <h3></h3>

            <div className='imagemNike'></div>
            <div className="nome">Tenis nike do futuro</div>
            <div>preço:x</div>
            <div>{numero}</div>
            <button className="botaoMaior" onClick={incrementar}>+</button>
            <button className="botaoMenor" onClick={descrementar}>-</button>
            <button className="compra">Comprar</button>

        </div>
    )
}
export default Produtos;