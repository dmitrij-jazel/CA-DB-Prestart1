function buttonClick(){ 
    let age = document.getElementById("age").value;    // Nuskaitom age is id="age"
    let age_number = Number(age); // paverciam zodi i numeri.
    age_number = age_number + 100; //Sudeti 2 skaicius
    //console.log(age);
    document.getElementById("result").innerHTML = "Mano amzius: " + age_number; //atvaizduoti rezultata
}

function btnMouseOver(){  
    document.getElementById("result").innerHTML = "Mouse Over";
}

function Sum(){
    let txt_a = document.getElementById("txt_a").value;
    let txt_b = document.getElementById("txt_b").value;

    let a_number = Number(txt_a);
    let b_number = Number(txt_b);

    let c = a_number + b_number; // Rezultato skaicius
    
    //patikrinti ar skaicius lyginis ar ne
    if(c % 2){
        document.getElementById("result").innerHTML = c +" nelyginis skaicius";
    }else{
        document.getElementById("result").innerHTML = c +" lyginis skaicius";        
    }

    if(c == 5){
        alert("Sveikinam, yra magiskas skaicius!");
    }
}

function CheckWords(){
    var shoppingList = ["Bananas", "Bread", "Milk", "Cookies", "Chips", "Coffee"];

    for(let i = 0; i < shoppingList.length; i++){
        console.log("Turiu atspausdint shoppingList["+i+"]");
        console.log(shoppingList[i]);
    }

    console.log("Atspausdinau viska... viso gero :)");

  
}



