import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { auth } from "../../Firebaseconnection";
import { signInWithEmailAndPassword } from "firebase/auth";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    
    if (email !== "" && password !== "") {
      try {
        // Tente fazer o login com o Firebase
        await signInWithEmailAndPassword(auth, email, password);
        
        // Caso o login seja bem-sucedido, navegue para a página do admin
        navigate("/admin", { replace: true });
      } catch (error) {
        // Em caso de erro, mostre o erro
        alert("Erro ao fazer login dados inválidos" );
      }
    } else {
      alert("Preencha os campos");
    }
  }

  return (
    <div className="home-container">
      <h1>Lista de tarefas</h1>
      <span>Sua agenda de forma fácil</span>

      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/register" className="link-button">
        Não possui uma conta? Cadastre-se
      </Link>
    </div>
  );
};

export default Index;
