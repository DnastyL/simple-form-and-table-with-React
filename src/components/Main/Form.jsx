import React from "react";
import "./form.css";
import Table from "./Table";

const Formulario = (props) => {

  const add = (e) => {
    e.preventDefault();
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
              value={props.nome}
              onChange={(e) => props.setNome(e.target.value)}
            />
            <p>Nome digitado: {props.nome}</p>
          </div>
          <div className="ui_input">
            <label>Email </label>
            <input
              className="caixa_input"
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Escreva o seu nome..."
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
            <p>Email digitado: {props.email}</p>
          </div>
          <button id="button" onClick={()=>props.setTabela(<Table 
            name={props.nome} email={props.email}/>)}>
            Enviar
          </button>
        </form>
      </div>
      {props.tabela}
      
    </section>
  );
};

export default Formulario;
