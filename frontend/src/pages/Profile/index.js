import React, {useEffect, useState} from 'react';
import './styles.css';
import logoImg  from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

export default function Profile(){

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    useEffect(()=>{
        api.get('profiles', {
            headers:{
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data);
        })
        }, [ongId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
            }});

            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (error) {
            alert('Erro. Não foi possível deletar o incidente.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindo(a), {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#FFF"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident =>(
                <li key={incident.id}>
                    <strong>Caso:</strong><p>{incident.title}</p>
                    <strong>DESCRIÇÃO:</strong><p>{incident.description}</p>
                    <strong>VALOR:</strong><p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}</p>

                    <button onClick={()=>handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>

                ))}

            </ul>
        </div>
    );
}