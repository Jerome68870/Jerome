
document.getElementById("contact").addEventListener("submit", function(e){

    let erreur;
    let nom = document.getElementById("nom");
    let prénom = document.getElementById("prénom");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");

    if(!msg.value) {
        erreur = "Veuillez renseigner le texte";
    }
    
    if(!email.value) {
        erreur = "Veuillez renseigner un email";
    }
    
    if(!prénom.value) {
        erreur = "Veuillez renseigner un prénom";
    }

    if(!nom.value) {
        erreur = "Veuillez renseigner un nom";
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false
    } 
    
    else {
        alert("Message envoyé !");
    }
})