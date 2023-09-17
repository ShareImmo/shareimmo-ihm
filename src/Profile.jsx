import React, { useState, useEffect } from "react";
import "./Profile.css"

const fetchData = async () => {
	try {
	  const response = await fetch('http://localhost:4000/users/1');
	  const data = await response.json();
	  return data;
	} catch (error) {
	  throw error; // Renvoyer l'erreur pour pouvoir la gérer dans le .catch() de useEffect
	}
  };

  const updateData = async (updatedData) => {
	try {
	  const response = await fetch('http://localhost:4000/users/1', {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(updatedData), // convertit l'objet JavaScript en chaîne JSON
	  });
  
	  if (response.ok) {
		const json = await response.json();
		return json;
	  } else {
		throw new Error('Failed to update data');
	  }
	} catch (error) {
	  console.error('An error occurred:', error);
	  throw error;
	}
  };
  

export const Profile = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [initialValues, setInitialValues] = useState({});
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    fetchData().then((data) => {
      // Mise à jour de l'état avec les valeurs récupérées
      setEmail(data.email);
      setPass(data.mot_de_passe);
      setNom(data.nom);
      setPrenom(data.prenom);
      setTelephone(data.telephone);
	  setConfirmPass(data.mot_de_passe);

      // Mise à jour des valeurs initiales
      setInitialValues({
        email: data.email,
        pass: data.mot_de_passe,
		confirmPass: data.mot_de_passe,
        nom: data.nom,
        prenom: data.prenom,
        telephone: data.telephone,
      });
    }).catch((error) => {
      console.error("Erreur lors de la récupération des données : ", error);
    });
  }, []);

  useEffect(() => {
	const currentValues = { email, pass, confirmPass, nom, prenom, telephone };
	setHasChanged(Object.keys(initialValues).some(key => initialValues[key] !== currentValues[key]));
  }, [email, pass, confirmPass, nom, prenom, telephone, initialValues]);
  

  const btnStyle = {
    borderRadius: "10px",
	backgroundColor: hasChanged ? "" : "grey"
  };


  const handleUpdate = async () => {
	if (hasChanged) {
	  try {
		await updateData({ email, mot_de_passe: pass, nom, prenom, telephone }).then((data) => {
			setInitialValues({
		  		email: email,
		  		pass: pass,
		  		confirmPass: pass,
		 		nom: nom,
		  		prenom: prenom,
		  		telephone: telephone,
		});
	});
	  } catch (error) {
		console.error("Erreur lors de la mise à jour des données :", error);
	  }
	}
  };


  return (
    <div className="App-div">
        <div className="auth-form-container">
          <h2>Vos Informations</h2>
          <ul>
            <li>Nom: {nom}</li>
            <li>Prénom: {prenom}</li>
            <li>
              Téléphone:
              <input
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </li>
            <li>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              Mot de passe:
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </li>
            <li>
              Confirmation du mot de passe:
              <input
                type="password"
				value={pass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </li>
          </ul>
          <button onClick={handleUpdate} style={btnStyle} disabled={!hasChanged}>
            Mettre à jour
          </button>
        </div>
    </div>
  );
};
