import React, { useState, useEffect } from 'react';

import './Produtos.scss';



const Produtos = () => {
    const [texto, setTexto] = useState("")
     
    useEffect(() => {
        if(localStorage.getItem("Name")){ 
           const nomeLocal =  localStorage.getItem("Name");
            setTexto (nomeLocal);
        }   
    }) 
    return (
        <div>
        <h2>{`Seja bem vindo ${texto}`}</h2>
        <h3></h3>
       
            <div className='imagem1'></div>
            <div>Tenis nike do futuro</div>
            <button>+</button>
            <button>-</button>
            <button>Comprar</button>
        
        </div>
    )
}
export default Produtos;