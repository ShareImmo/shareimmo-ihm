import React,{ useState } from "react";
import { Link } from "react-router-dom";
//import './connexion.css';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [telephone, setTelephone] = useState('');

    const btnStyle = {
        borderRadius: '10px',
    }

    const submit = (e) => {
        e.preveventDefault();
    }
    
    return (
        <div className="App-div">
            <div className="auth-form-container">
                <h2>Créer mon compte</h2>
                <br />
                <form className="register-form" onSubmit={submit}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div>
                            <label htmlFor="nom">Nom&nbsp;</label>&nbsp;&nbsp;
                            <input type="text" value={nom} placeholder="Nom" id="nom" name="nom" required/>
                        </div>

                        <div>
                            <label htmlFor="prenom">Prénom</label>&nbsp;&nbsp;
                            <input type="text" value={prenom} placeholder="Prénom" id="prenom" name="prenom" required/>
                        </div>
                    </div>
                    <label htmlfor="telephone">Téléphone</label>
                    <input type="text" value={telephone} placeholder="Téléphone" id="telephone" name="telephone"></input>

                    <label htmlfor="email">Adresse mail</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email@gmail.com" id="email" name="email" required></input>

                    <label htmlfor="password">Mot de passe</label>
                    <input type="password" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder="********" id="password" name="password" required></input>
                    
                    <label htmlfor="confirmPass">Confirmer le mot de passe</label>
                    <input type="password" value={confirmPass} placeholder="********" id="confirmPass" name="confirmPass" required></input>
                    <br />
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required></input>
                        <label class="form-check-label" htmlfor="flexCheckDefault">
                            &nbsp;&nbsp;J'accepte les CGU *
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required></input>
                        <label class="form-check-label" htmlfor="flexCheckDefault">
                        &nbsp;&nbsp;J'ai conscience que l'investissement comporte des risques *
                        </label>
                    </div>
                    <br />
                    <button style={btnStyle}>S'inscrire</button>
                </form>
                <br />
                <Link className="link-btn" to="/login">
                    Vous avez déjà un compte ? Connectez-vous
                </Link>
            </div>
        </div>
    )    
}