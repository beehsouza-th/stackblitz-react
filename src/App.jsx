import { useState } from 'react';
import {auth} from './config/firebaseConfig.js';
import {singInwithEmailAndPssword} from 'firebase/auth';

export default function App() {
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');

 const autenticarComFirebase = async (evento) =>{
    evento.preventDefault();
    try{
      await singInwithEmailAndPssword(auth, email, senha);
      alert('Logado com sucesso!');
    }catch (err){
      alert('Erro no processo', err);
    } 
 };
 return(
  <main>
    <form onSubmit={autenticarComFirebase}>
      <label htmlFor='email'>E-mail:</label>
      <input 
      id="email"
      nome="email"
      type="email"
      value={email}
      onChange={(evento)=> setEmail(evento.target.value)}
      />
      <label htmlFor='password'>Senha:</label>
      <input
      id="password"
      nome="password"
      type="password"
      value={senha}
      onChange={(evento)=> setSenha(evento.target.value)}
      />
      <button onClick={autenticarComFirebase}></button>
    </form>
  </main>
 );
}


