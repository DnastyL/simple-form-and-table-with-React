import './App.css';
import Header from './Header/Header';
import Formulario from './Main/Form';
import React, {useState} from 'react';


function App() {
  
const [nome, setNome] = useState();
const [email, setEmail] = useState();
const [tabela, setTabela] = useState();
  return (
    <section>
      <Header />
      <Formulario nome={nome} setNome={setNome} 
       email={email} setEmail={setEmail} tabela={tabela} setTabela={setTabela}/>
    </section>
  );
}

export default App;
