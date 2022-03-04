import "./form.css";
import {Table} from "./Table";
import {useState} from "react";

export const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mostrarTabela, setMostrarTabela] = useState(false);

  const add = (e) => {
    e.preventDefault();
    setMostrarTabela(true);
  };


  return (
    <section>
      <div className="ui_main">
        <form onSubmit={add}>
          <div className="ui_input">
            <label>Nome </label>
            <input
              className="caixa_input"
              type="text"
              name="nome"
              placeholder="Escreva o seu nome..."
              autoComplete="off"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <p>Nome digitado: {nome}</p>
          </div>
          <div className="ui_input">
            <label>Email </label>
            <input
              className="caixa_input"
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Escreva o seu email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Email digitado: {email}</p>
          </div>
          <button id="button" disabled={!nome || !email}>
            Enviar
          </button>
        </form>
      </div>
      {mostrarTabela && <Table nome={nome} email={email}/>}
      
    </section>
  );
};


