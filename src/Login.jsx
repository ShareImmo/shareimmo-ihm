import React, {useState } from "react";
import './connexion.css';
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import Validation from "./LoginValidation";

export const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }
    const btnStyle = {
        borderRadius: '10px',
    }

    function submit (e){
        e.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(err.email === "" && err.password === ""){
            
            axios.post('http://localhost:4000/login', values)
            .then(res => {
                console.log(res.data);
                if(res.data === "OK"){
                    navigate('/projects');
                }else{
                    alert("Mot de passe incorrect ou utilisateur non inscrit !");
                }
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div>
            <div className="App-div">
                <div className="auth-form-container">
                    <h2 style={{color: 'white'}}>Se connecter</h2>
                    <form className="login-form" onSubmit={(e) => submit(e)}>
                        <label htmlFor="email">Adresse mail</label>
                        <input type="email" value={email} onChange={handleInput} placeholder="email@gmail.com" id="email" name="email"></input>
                        {errors.email && <span className="text-danger">{errors.email}</span>}

                        <label htmlFor="mdp">Mot de passe</label>
                        <input type="password" value={password} onChange={handleInput} placeholder="********" id="password" name="password" />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                        <br/>
                        <button type="submit" style={btnStyle}>Se connecter</button>
                    </form>
                    <br />
                    <Link className="link-btn" to="/register">
                        Vous n'avez pas de compte ? Créer un compte
                    </Link>
                </div>
            </div>
        </div> 
    )    
}