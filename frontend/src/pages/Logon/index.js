import React from 'react';

import './styles.css';
import logoImg  from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import {FiLogIn} from 'react-icons/fi'

export default function Logon(){
    return(
       <div className="logon-container">
           <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Cadastrar</a>
                </form>

           </section>
           <img src={heroesImg} alt="Heroes"/>
       </div>
    );
}