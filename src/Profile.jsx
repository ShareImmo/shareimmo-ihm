import React, { useState, useEffect } from "react";

const fetchData = async () => {
	try {
	  const response = await fetch('http://localhost:4000/user/1');
	  if (response.ok) {
		const json = await response.json();
		return json;
	  } else {
		throw new Error("Failed to fetch data");
	  }
	} catch (error) {
	  console.error(error);
	  throw error; 
	}
  };

  const updateData = async (updatedData) => {
	try {
	  const response = await fetch('https://api.example.com/data', {
		method: 'PUT', // ou 'POST' selon l'API
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
  const data = fetchData();

  useEffect(() => {
    fetchData().then((data) => {
      setEmail(data.email);
      setPass(data.pass);
      setConfirmPass(data.confirmPass);
      setNom(data.nom);
      setPrenom(data.prenom);
      setTelephone(data.telephone);
    });
  }, []);

  const btnStyle = {
    borderRadius: "10px",
  };

  const handleUpdate = async () => {
    await updateData({ email, pass, confirmPass, nom, prenom, telephone });
  };

  return (
    <div className="App-div">
        <div className="auth-form-container">
          <h2>Vos Informations</h2>
          <ul>
            <li>Nom: {data.nom}</li>
            <li>Prénom: {data.prenom}</li>
            <li>
              Téléphone:
              <input
                type="text"
                value={data.telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </li>
            <li>
              Email:
              <input
                type="email"
                value={data.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              Mot de passe:
              <input
                type="password"
                value={data.pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </li>
            <li>
              Confirmation du mot de passe:
              <input
                type="password"
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </li>
          </ul>
          <button onClick={handleUpdate} style={btnStyle}>
            Mettre à jour
          </button>
        </div>
    </div>
  );
};
