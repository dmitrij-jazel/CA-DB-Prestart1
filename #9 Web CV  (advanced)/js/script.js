function send(){
    let vardas = document.getElementById("firstname").value;
    let pavarde = document.getElementById("lastname").value;
    let elPastas = document.getElementById("email").value;
    let zinute = document.getElementById("message").value;

    // patikrinam varda
    if(vardas.length > 0){
        document.getElementById("firstname").classList.remove("is-invalid");
    }else{
        document.getElementById("firstname").classList.add("is-invalid");
    }

    // patikrinam pavarde
    if(pavarde.length > 0){
        // Kai pavarde yra taisinga
        document.getElementById("lastname").classList.remove("is-invalid");
    }else{
        //Kai pavarde NERA taisinga
        document.getElementById("lastname").classList.add("is-invalid");
    }

    // patikrinam el.pasta
    if(elPastas.length > 0){
        // jeigu el.pasto laukelis nera tuscias - turim patikrinti ar jis yra taisingas
        if (elPastas.match(/[\w-]+@([\w-]+\.)+[\w-]+/g)) {
            //console.log("El pastas yra taisingas");
            document.getElementById("email").classList.remove("is-invalid");
        }else{
            // Kai 
            document.getElementById("email").classList.add("is-invalid");
        }
    }else{
        // Kai el. pastas YRA TUSCIAS
        document.getElementById("email").classList.add("is-invalid");
    }

    // patikrinam varda
    if(pavarde.length > 0){
        //Kai zinute yra tvarkinga
        document.getElementById("message").classList.remove("is-invalid");
    }else{
        //Kai zinute YRA TUSCIA
        document.getElementById("message").classList.add("is-invalid");
    }

}
