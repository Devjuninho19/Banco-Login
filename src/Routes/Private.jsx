import { useState, useEffect } from "react";
import { auth } from "../Firebaseconnection";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

export default function Private({ children }) {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    // Define o listener de autenticação
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Se o usuário estiver autenticado, armazena os dados no localStorage
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        localStorage.setItem("@local", JSON.stringify(userData));
        setLoading(false); // Defina loading como false após verificar o status de autenticação
        setSigned(true); // Usuário autenticado
      } else {
        // Se o usuário não estiver autenticado
        setLoading(false);
        setSigned(false);
      }
    });

    // Cleanup: Desinscreve o listener quando o componente for desmontado
    return () => unsub();
  }, []);

  // Exibe uma tela de carregamento enquanto `loading` for true
  if (loading) {
    return <div>Carregando...</div>; // Aqui pode ser um spinner ou outra coisa
  }

  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!signed) {
    return <Navigate to="/" />;
  }

  // Se o usuário estiver autenticado, retorna os filhos (conteúdo protegido)
  return children;
}
