import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import './App.css/styles.css'
import { useNavigate } from "react-router-dom";
import { auth } from "./config/firebaseConfig";

export default function Registra(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigate();

    const handleRegister = async (e) =>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, senha);
            navigation('/login');
        }catch(erro){
            alert('Erro ao cadastrar')
        }
    };

    return(
     <main>
        <div className='container'>
          <div className='form-image'>
            <img src= 'assets/img/undraw_access-account_aydp.svg' />
             </div>
              <div className='form'>
               <form onSubmit={handleRegister}> 
                <div className='form-header'>
                 <h1>Registrar</h1>
                  </div>
                    <div className='form-header'>
                 <div className='input-group'>
                  <div className='input-box'>
                  <label htmlFor="email">E-mail:</label>
                <input
                   type="email"
                   value={email}
                   placeholder='Ex:jorge@gmail.com'
                   onChange={(evento) => setEmail(evento.target.value)}
                   required
                />
                </div>
                 <div className="input-box">
                 <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  value={senha}
                  placeholder='Senha'
                  onChange={(evento) => setSenha(evento.target.value)}
                  required
                />
                </div>
                <div className='login-button'>
                 <button type="submit"> Finalizar </button>
                 </div>
                   </div>
                   <div>
                </div>
              </div>
            </form>
          </div>
        </div>
     </main>
    );
}
