function send(){
    
    let nera_klaidu = true;

    let vardas = document.getElementById("firstname").value;
    let pavarde = document.getElementById("lastname").value;
    let elPastas = document.getElementById("email").value;
    let zinute = document.getElementById("message").value;

    // patikrinam varda
    if(vardas.length > 0){
        document.getElementById("firstname").classList.remove("is-invalid");
        document.getElementById("firstname_error_msg").innerText = "";
    }else{
        document.getElementById("firstname").classList.add("is-invalid");
        document.getElementById("firstname_error_msg").innerText = "Vardas yra provalomas";
        nera_klaidu = false;
    }

    // patikrinam pavarde
    if(pavarde.length > 0){
        // Kai pavarde yra taisinga
        document.getElementById("lastname").classList.remove("is-invalid");
        document.getElementById("lastname_error_msg").innerText = "";
    }else{
        //Kai pavarde NERA taisinga
        document.getElementById("lastname").classList.add("is-invalid");
        document.getElementById("lastname_error_msg").innerText = "Pavarde yra provaloma";
        nera_klaidu = false;
    }

    // patikrinam el.pasta
    if(elPastas.length > 0){
        // jeigu el.pasto laukelis nera tuscias - turim patikrinti ar jis yra taisingas
        if (elPastas.match(/[\w-]+@([\w-]+\.)+[\w-]+/g)) {
            //Kai El. pastas yra tvarkingas
            document.getElementById("email").classList.remove("is-invalid");
            document.getElementById("email_error_msg").innerText = "";
        }else{
            // Kai el pastas yra neteisingas
            document.getElementById("email").classList.add("is-invalid");
            document.getElementById("email_error_msg").innerText = "Blogai suformatuotas el. pastas";
            nera_klaidu = false;
        }
    }else{
        // Kai el. pastas YRA TUSCIAS
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("email_error_msg").innerText = "El. pastas yra privalomas";
        nera_klaidu = false;
    }

    // patikrinam varda
    if(zinute.length > 0){
        //Kai zinute yra tvarkinga
        document.getElementById("message").classList.remove("is-invalid");
        document.getElementById("message_error_msg").innerText = "";
    }else{
        //Kai zinute YRA TUSCIA
        document.getElementById("message").classList.add("is-invalid");
        document.getElementById("message_error_msg").innerText = "Zinute yra privaloma";
        nera_klaidu = false;
    }

    if(nera_klaidu){
        alert("Aciu uz jusu Zinute!");
        resetElements();
    }
}

function resetElements(){
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}