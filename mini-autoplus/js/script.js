let brand_field = document.getElementById("brand");
let model_field = document.getElementById("model");
let hp_field = document.getElementById("hp");
let engine_field = document.getElementById("engine");

let cars = [];

let saved_cars_string = localStorage.getItem("cars");
var jsonData = JSON.parse(saved_cars_string);
for (var i = 0; i < jsonData.length; i++) {
    var car = jsonData[i];
    cars.push(car);
}


function register(){
    let car = {
        brand: brand_field.value, 
        model: model_field.value, 
        hp: hp_field.value,
        engine: engine_field.value
    };

    
    cars.push(car);

    //atvaizduoti sukurtas masinas
    printCars(cars);

    // Store
    let cars_json = JSON.stringify(cars);    
    localStorage.setItem("cars", cars_json);   
} 

function printCars(cars){
    let h = "";

    for(let i = 0; i < cars.length;i++){
        h = h + `
        <div>
            <h3>${cars[i].brand} ${cars[i].model}</h3>
            <div>
                <table class="table">
                    <tr><th>Horse power:</th><td>${cars[i].hp}</td></tr>
                    <tr><th>Engine:</th><td>${cars[i].engine}</td></tr>
                </table>
            </div>
        </div>   
        <hr/>     
        `;
    }

    document.getElementById("result").innerHTML = h;
}









