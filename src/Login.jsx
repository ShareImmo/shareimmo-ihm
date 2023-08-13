import React, {useState} from "react";
import './connexion.css';
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const btnStyle = {
        borderRadius: '10px',
    }

    const submit = (e) => {
        e.preveventDefault();
    }
    return (
        <div className="App-div">
            <div className="auth-form-container">
                <h2>Se connecter</h2>
                <form className="login-form" onSubmit={submit}>
                    <label for="email">Adresse mail</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email@gmail.com" id="email" name="email"></input>

                    <label for="mdp">Mot de passe</label>
                    <input type="password" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder="********" id="password" name="password"></input>
                    <br/>
                    <button style={btnStyle}>Se connecter</button>
                </form>
                <br />
                <Link className="link-btn" to="/register">
                    Vous n'avez pas de compte ? Créer un compte
                </Link>
            </div>
        </div>
        
        
    )    
}