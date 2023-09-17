import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = () => {

    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null);
    const [nom, setNom] = useState(null);
    const [prenom, setPrenom] = useState(null);
    const [telephone, setTelephone] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPass(value);
        }
        if(id === "confirmPass"){
            setConfirmPass(value);
        }
        if(id === "nom"){
            setNom(value);
        }
        if(id === "prenom"){
            setPrenom(value);
        }
        if(id === "telephone"){
            setTelephone(value);
        }
    }

    const handleSubmit  = () => {
        console.log(nom, prenom, email, pass,confirmPass, telephone);
    }

    /*const register = () => {
        Axios.post('https://localhost4000/register', {
            nom:nom, prenom:prenom, email:email, 
            mot_de_passe:pass, confirmPass:confirmPass,
             telephone:telephone
        }).then((response) => {
            console.log(response);
        });
    };*/

    const btnStyle = {
        borderRadius: '10px',
    }

    const submit = async (e) => {
        //e.preventDefault();

        try{
            const response = await axios.post('https://localhost4000/register', {
                nom:nom,
                prenom:prenom,
                telephone:telephone,
                email:email,
                password: pass,
            });

            if (response.data && response.data.message === 'Registration successful') {
                console.log('Registration successful');
              } else {
                console.log('Registration failed');
              }
        }catch (error){
            console.error('Error:', error);
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
                            <input type="text" value={nom} onChange={(e)=> handleInputChange(e)} placeholder="Nom" id="nom" name="nom" required/>
                        </div>

                        <div>
                            <label htmlFor="prenom">Prénom</label>&nbsp;&nbsp;
                            <input type="text" value={prenom} onChange={(e)=> handleInputChange(e)} placeholder="Prénom" id="prenom" name="prenom" required/>
                        </div>
                    </div>
                    <label htmlFor="telephone">Téléphone</label>
                    <input type="text" value={telephone} onChange={(e)=> handleInputChange(e)} placeholder="Téléphone" id="telephone" name="telephone"></input>

                    <label htmlFor="email">Adresse mail</label>
                    <input type="email" value={email} onChange={(e)=> handleInputChange(e)} placeholder="email@gmail.com" id="email" name="email" required></input>

                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" value={pass} onChange={(e)=> handleInputChange(e)} placeholder="********" id="password" name="password" required></input>
                    
                    <label htmlFor="confirmPass">Confirmer le mot de passe</label>
                    <input type="password" value={confirmPass} onChange={(e)=> handleInputChange(e)} placeholder="********" id="confirmPass" name="confirmPass" required></input>
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
                    <button onClick={()=>handleSubmit()} style={btnStyle}>S'inscrire</button>
                </form>
                <br />
                <Link className="link-btn" to="/login">
                    Vous avez déjà un compte ? Connectez-vous
                </Link>
            </div>
        </div>
    )    
}