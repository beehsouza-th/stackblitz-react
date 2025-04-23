import { Link } from 'react-router-dom';
import './App.css/styles.css'
export default function Home(){
    return(
        <main>
            <h1>Bem vindo!</h1>
            <Link className='button-register' to= "/login">
                <h2>Voltar para a página de login</h2>
            </Link>
        </main>
    );
}