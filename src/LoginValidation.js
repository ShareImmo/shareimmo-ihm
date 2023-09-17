
function Validation (values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,24}$/;  /*/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/*/
    
    if(values.email === ""){
        error.email = "Email ne peut pas être vide"
    }
    else if (! email_pattern.test(values.email)){
        error.email = "Email non valide"
    }
    else {
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Merci de renseigner un mot de passe valide"
    }
    else if (! password_pattern.test(values.password)){
        error.password = "Mot de passe non valide"
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;