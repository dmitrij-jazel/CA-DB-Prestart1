function send(){
    let vardas = document.getElementById("firstname").value;
    let pavarde = document.getElementById("lastname").value;
    let elPastas = document.getElementById("email").value;
    let zinute = document.getElementById("message").value;

    console.log(vardas);
    console.log(pavarde);
    console.log(elPastas);
    console.log(zinute);

    if(vardas.length > 0){
        console.log("Vardas yra taisingas");
    }else{
        alert("Vardas yra provalomas");
    }

    if(pavarde.length > 0){
        console.log("Pavarde yra taisinga");
    }else{
        alert("Pavarde yra provaloma");
    }

    if(elPastas.length > 0){        
        var re = new RegExp("[\w-]+@([\w-]+\.)+[\w-]+");
        if (re.test(elPastas)) {
            console.log("El pastas yra taisingas");
        } else {
            alert("El pasto forma neteisinga");
        }
    }else{
        alert("El pastas yra provalomas");
    }

    

}