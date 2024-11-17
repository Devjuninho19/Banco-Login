import React, { useState } from "react";
import { auth } from "../../Firebaseconnection";
import { signOut } from "firebase/auth";
import "./admin.css";
const index = () => {
  const [tarefaInput, setTarefaInput] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    alert("clicou!");
  }

async function logout(){
await signOut(auth)
  }
  return (
    <div className="admin-container">
      <h1>Minhas Tarefas</h1>

      <form className="form" onSubmit={handleRegister}>
        <textarea
          placeholder="Digite sua tarefa"
          value={tarefaInput}
          onChange={(e) => setTarefaInput(e.target.value)}
        />
        <button className="btn-register" type="submit">Registrar</button>
      </form>

      <article className="list">
        <p>Estudar React</p>
        <div>
          <button>Editar</button>
          <button className="btn-concluir">Finalizar</button>
        </div>
      </article>
      <button className="btn-sair" onClick={logout}>Sair</button>
    </div>
  );
};

export default index;
