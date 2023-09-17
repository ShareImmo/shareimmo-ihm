import React,{ useState, useEffect, useRef } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Validation from "./RegisterValidation";

export const Register = () => {
    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null);
    const [nom, setNom] = useState(null);
    const [prenom, setPrenom] = useState(null);
    const [telephone, setTelephone] = useState(null);

    const navigate = useNavigate();

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");
    const [values, setValues] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        confirmPass: '',
        telephone: '',
        date: formattedDate
    })

    const [errors, setErrors] = useState({})
    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }
    
    const btnStyle = {
        borderRadius: '10px',
    }

    const submit =  (e) => {
        e.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(err.nom === "" && err.email === "" && err.password === "" && err.confirmPass === ""){
            
            axios.post('http://localhost:4000/register', values)
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
        }
    };
    
    return (
        <div className="App-div">
            <div className="auth-form-container">
                <h2 style={{color: 'white'}}>Créer mon compte</h2>
                <br />
                <form className="register-form" onSubmit={(e) => submit(e)}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div>
                            <label htmlFor="nom">Nom</label>
                            <input type="text" value={nom} onChange={handleInput} placeholder="Nom" id="nom" name="nom" required/>
                            {errors.nom && <span className="text-danger">{errors.nom}</span>}
                        </div>

                        <div>
                            <label htmlFor="prenom">Prénom</label>&nbsp;&nbsp;
                            <input type="text" value={prenom} onChange={handleInput} placeholder="Prénom" id="prenom" name="prenom" required/>
                        </div>
                    </div>
                    <label htmlFor="telephone">Téléphone</label>
                    <input type="number" value={telephone} onChange={handleInput} placeholder="Téléphone" id="telephone" name="telephone"></input>

                    <label htmlFor="email">Adresse mail</label>
                    <input type="email" value={email} onChange={handleInput} placeholder="email@gmail.com" id="email" name="email" required></input>
                    {errors.email && <span className="text-danger">{errors.email}</span>}

                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" value={password} onChange={handleInput} placeholder="********" id="password" name="password" required></input>
                    {errors.password && <span className="text-danger">{errors.password}</span>}

                    <label htmlFor="confirmPass">Confirmer le mot de passe</label>
                    <input type="password" value={confirmPass} onChange={handleInput} placeholder="********" id="confirmPass" name="confirmPass" required></input>
                    {errors.confirmPass && <span className="text-danger">{errors.confirmPass}</span>}

                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            &nbsp;&nbsp;J'accepte les CGU *
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        &nbsp;&nbsp;J'ai conscience que l'investissement comporte des risques *
                        </label>
                    </div>
                    <br />
                    <button type="submit" style={btnStyle}>S'inscrire</button>
                </form>
                <br />
                <Link className="link-btn" to="/login">
                    Vous avez déjà un compte ? Connectez-vous
                </Link>
            </div>
        </div>
    )    
}