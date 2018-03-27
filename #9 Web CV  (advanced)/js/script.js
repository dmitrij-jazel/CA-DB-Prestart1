function send(){
    let vardas = document.getElementById("firstname").value;
    let pavarde = document.getElementById("lastname").value;
    let elPastas = document.getElementById("email").value;
    let zinute = document.getElementById("message").value;

    console.log(vardas);
    console.log(pavarde);
    console.log(elPastas);
    console.log(zinute);

    // patikrinam varda
    if(vardas.length > 0){
        console.log("Vardas yra taisingas");
    }else{
        alert("Vardas yra provalomas");
    }

    // patikrinam pavarde
    if(pavarde.length > 0){
        console.log("Pavarde yra taisinga");
    }else{
        alert("Pavarde yra provaloma");
    }

    // patikrinam el.pasta
    if(elPastas.length > 0){        
        // jeigu el.pasto laukelis nera tuscias - turim patikrinti ar jis yra taisingas
        if (elPastas.match(/[\w-]+@([\w-]+\.)+[\w-]+/g)) {
            console.log("El pastas yra taisingas");
            document.getElementById("email").classList.remove("redText");
        }else{
            //alert("El pasto forma neteisinga");
            document.getElementById("email").classList.add("redText");
        }
    }else{
        document.getElementById("email").classList.add("redText");
        //alert("El pastas yra provalomas");
    }

    // patikrinam varda
    if(pavarde.length > 0){
        //console.log("Zinute yra taisinga");
        document.getElementById("message").classList.remove("redText");
    }else{
        //alert("Zinute yra provaloma");
        document.getElementById("message").classList.add("redText");
    }

}