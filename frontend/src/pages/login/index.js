import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './style.css'
import heroesImage from '../../assets/heroes.png'
import loginImage from '../../assets/logo.svg'

export default function Login() {
    const [id, setID] = useState('');
    const history = useHistory('');

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login');
        }
    }

    return (
      <div className="login-container">
          <section className="form">
              <img src={loginImage} alt="allmigth"/>
              
              <form onSubmit={handleLogin}>
                  <h1>Faca seu login</h1>
                  <input placeholder="Sua ID" value={id} onChange={e => setID(e.target.value)}/>
                  <button className="button" type="submit">Entrar</button>

                  <Link className=".back-link" to="/register">
                      <FiLogIn size={16} color="#E02041"/>
                      Nao tenho cadastro
                  </Link>
              </form>
          </section>
          <img src={heroesImage} alt="motivacional"/>        
      </div>
    );
} 