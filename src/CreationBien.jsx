import React,{ useState } from "react";
import './formulaire.css';

export const CreationBien = () => {
    const [nom, setNom] = useState('');
    const [reference, setReference] = useState('');
    const [adresse, setAdresse] = useState('');
    const [adresseComplement, setAdresseComplement] = useState('');
    const [ville, setVille] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [pays, setPays] = useState('');
    const [description, setDescription] = useState('');
    const [dateAchat, setdateAchat] = useState('');
    const [superficie, setSuperficie] = useState('');
    const [etage, setEtage] = useState('');
    const [nbPieces, setNbPieces] = useState('');
    const [montantAcquisition, setMontantAcquisition] = useState('');

    const btnStyle = {
        borderRadius: '10px',
    }

    const submit = (e) => {
        e.preveventDefault();
    }
    
    return (
        <div className="App-div-bien">
            <div className="bien-form-container">
                <h2>Créer la fiche d'un bien immobilier</h2>
                <br />
                <form className="bien-form" onSubmit={submit}>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" value={nom} onChange={(e)=> setNom(e.target.value)} placeholder="Nom" id="nom" name="nom" required/>
                    
                    <label htmlFor="reference">Référence</label>
                    <input type="text" value={reference} onChange={(e)=> setReference(e.target.value)} placeholder="Référence" id="reference" name="reference" required/>
                        
                    <label htmlFor="adresse">Adresse</label>
                    <input type="text" value={adresse} onChange={(e)=> setAdresse(e.target.value)} placeholder="Adresse" id="adresse" name="adresse"></input>

                    <label htmlFor="adresseComplement">Complément d'adresse</label>
                    <input type="text" value={adresseComplement} onChange={(e)=> setAdresseComplement(e.target.value)} placeholder="Complément d'adresse" id="adresseComplement" name="adresseComplement"></input>

                    <label htmlFor="ville">Ville</label>
                    <input type="text" value={ville} onChange={(e)=> setVille(e.target.value)} placeholder="Paris" id="ville" name="ville" required></input>

                    <label htmlFor="codePostal">Code postal</label>
                    <input type="text" value={codePostal} onChange={(e)=> setCodePostal(e.target.value)} placeholder="75001" id="codePostal" name="codePostal" required></input>

                    <label htmlFor="pays">Pays</label>
                    <input type="text" value={pays} onChange={(e)=> setPays(e.target.value)} placeholder="France" id="pays" name="pays" required></input>

                    <label htmlFor="description">Description</label>
                    <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Immeuble ..." id="description" name="description" required></input>

                    <label htmlFor="dateAchat">Date D'achat du bien</label>
                    <input type="datetime-local" value={dateAchat} onChange={(e)=> setdateAchat(e.target.value)} placeholder="01/01/2023" id="dateAchat" name="dateAchat" required></input>

                    <label htmlFor="superficie">Superficie</label>
                    <input type="text" value={superficie} onChange={(e)=> setSuperficie(e.target.value)} placeholder="200 m²" id="superficie" name="superficie" required></input>

                    <label htmlFor="etage">Etage</label>
                    <input type="number" value={etage} onChange={(e)=> setEtage(e.target.value)} placeholder="2" id="etage" name="etage" required></input>
                    
                    <label htmlFor="nbPieces">Nombre de pièces</label>
                    <input type="number" value={nbPieces} placeholder="5" id="nbPieces" name="nbPieces" required></input>

                    <label htmlFor="montantAcquisition">Montant d'acquisition du bien</label>
                    <input type="number" value={montantAcquisition} onChange={(e)=> setMontantAcquisition(e.target.value)} placeholder="300 000 €" id="montantAcquisition" name="montantAcquisition" required></input>

                    <label htmlFor="nbPieces">Nombre de pièces</label>
                    <input type="number" value={nbPieces} onChange={(e)=> setNbPieces(e.target.value)} placeholder="5" id="nbPieces" name="nbPieces" required></input>

                    <br />
                    <label htmlFor="image">Ajouter les photos du bien</label>
                    <input type="file" id="image" name="image" accept="image/*"></input>

                    <label htmlFor="document">Ajouter les documents relatifs au bien</label>
                    <input type="file" id="document" name="document" multiple></input>

                    <br />
                    <button style={btnStyle}>Enregistrer la fiche du bien</button>
                </form>
                
            </div>
        </div>
    )    
}