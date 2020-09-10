import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Input from '../../components/Input';

const Login = () => {
  return (
    <div id="page-container">
      <div className="banner-container">
        <div className="background"></div>
      </div>
      <div className="login-container">
        <h1 className="title">Fazer login</h1>
        <Input name="email" label="Email" value="" />
        <Input name="password" label="Senha" value="" />
        <button type="submit">Entrar</button>

        <footer>
          <div className="register-title">
            <h2>Não tem conta?</h2>
            <span>É de graça</span>
          </div>
          <Link to="/register" className="register-link">
            Cadastre-se
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
