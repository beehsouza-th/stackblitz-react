import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './App.css/styles.css'
import { useNavigate } from 'react-router-dom';
import { SignJWT } from 'jose';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);

      const secretkey = new TextEncoder().encode('minhaChaveSecreta');

      const token = await new SignJWT({ user: 'admin'})
      .setProtectedHeader({ alg: 'HS256'})
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(secretkey);

      localStorage.setItem('token', token);
      navigate('/')
      alert('Logado com sucesso!');
    } catch (err) {
      alert('Erro no processo', err);
    }
  };
  return (
    <main>
      <div className='container'>
        <div className='form-image'>
          <img src= 'assets/img/undraw_login_weas.svg' />
        </div>
        <div className='form'>
         <form onSubmit={autenticarComFirebase}> 
            <div className='form-header'>
              <div className='title'>
                <h1>Login</h1>
              </div>
              <div className='input-group'>
                <div className='input-box'>
                <label htmlFor="email">E-mail:</label>
              <input
                 id="email"
                 name="e-mail"
                 placeholder='Ex:jorge@gmail.com'
                 type="email"
                 value={email}
                 onChange={(evento) => setEmail(evento.target.value)}
              />
              </div>

              
               <div className="input-box">
               <label htmlFor="password">Senha:</label>
              <input
                id="password"
                name="password"
                placeholder='Digite sua senha'
                type="password"
                value={senha}
                onChange={(evento) => setSenha(evento.target.value)}
              />
              </div>
              
              <div className='login-button'>
              <button type="submit"> Fazer Login </button>
              </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  
  );
}
