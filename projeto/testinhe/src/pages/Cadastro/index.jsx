import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();





  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/cadastro', {
        username,
        email,
        senha,
      });

      navigate('/login'); // Redirecionar para a página de login após o cadastro
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao cadastrar');
    }
  };

  return (
    <C.Container>
      <C.Label>CRIE SUA CONTA</C.Label>
      <C.Content>

        <Input
          type="text"
          placeholder="Digite seu nome de usuario"
          value={username}
          onChange={(e) => [setUsername(e.target.value), setError("")]}
        />

        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/Login">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Cadastro;
