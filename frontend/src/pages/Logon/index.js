import React, {useState} from 'react';

import './styles.css';
import logoImg  from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function Logon(){

    const [id, setId] = useState();
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('session', { id });
            alert(`Seja bem vindo(a) ${response.data.name}`);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (error) {
            alert('Falha no Login, tente novamente.');
        }
    }

    return(
       <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041" />Cadastrar
                </Link>
            </section>
            <img src={heroesImg} alt="Heroes"/>    
       </div>
    );
}