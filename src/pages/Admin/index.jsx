import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebaseconnection";
import { signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import "./admin.css";
const index = () => {
  const [tarefaInput, setTarefaInput] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    async function loadTarefas() {
      const userDetail = localStorage.getItem("@local");
      setUser(JSON.parse(userDetail));
    }
    loadTarefas()
  },[]);
  async function handleRegister(e) {
    e.preventDefault();
    if (tarefaInput === "") {
      alert("Digite a sua tarefa");
      return;
    }
    await addDoc(collection(db, "tarefas"), {
      tarefa: tarefaInput,
      created: new Date(),
      userUid: user?.uid
      
    })
      .then(() => {
        console.log("TAREFA REGISTRADA");
      })

      .catch((error) => {
        console.log("ALGO DEU ERRADO" + error);
      });
  }

  async function logout() {
    await signOut(auth);
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
        <button className="btn-register" type="submit">
          Registrar
        </button>
      </form>

      <article className="list">
        <p>Estudar React</p>
        <div>
          <button>Editar</button>
          <button className="btn-concluir">Finalizar</button>
        </div>
      </article>
      <button className="btn-sair" onClick={logout}>
        Sair
      </button>
    </div>
  );
};

export default index;
