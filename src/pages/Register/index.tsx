import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Input from '../../components/Input';

const Register = () => {
  return (
    <div id="page-container">
      <div className="register-container">
        <h1 className="title">Cadastro</h1>
        <h2>Preencha os dados abaixo para começar</h2>
        <Input name="name" label="Nome" value="" />
        <Input name="email" label="Email" value="" />
        <Input name="password" label="Senha" value="" />
        <button type="submit">Concluir Cadastro</button>
      </div>
      <div className="banner-container">
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Register;
