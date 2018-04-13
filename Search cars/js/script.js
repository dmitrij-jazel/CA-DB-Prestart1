$(function() {
	$("#btn_search").click(function () {
		var errors = []; // String masyvas pvz, "warning1","warning2","warning3"
		clearResults();
		/*// patikrinam ar laukelis turi reiksme, ir ar reiksme yra Numeris
		if($("#hp_from").val()){
			var hp_from = $("#hp_from").val(); // cia privalo but numeris
			if(typeof hp_from != number){
				errors.push("hp_from turi but numeris.");
			}
		}else{
			errors.push("hp_from yra privalomas.");
		}*/
		
		//TODO Patiktinti ar informacija yra teisinga.
		//VALIDATION
		/*if(!$("#Brand").val()){
			errors.push("Brand yra privalomas.");
			$("#Brand").addClass("is-invalid");
		}else{
			$("#Brand").removeClass("is-invalid");
		}*/
		
		$(".numeric").each(function () {
			$(this).removeClass("is-invalid");
			let field_rel = $(this).attr("rel");
			let _val = $(this).val();
			//console.log("["+_val+"] "+$(this).attr("rel"));
			if(_val){
				//console.log(field_rel);			
				if(isNaN(_val)){
					errors.push(field_rel +" turi but numeris.");
					$(this).addClass("is-invalid");
				}				
			}else{
				$(this).addClass("is-invalid");
				errors.push(field_rel+" yra privalomas.");
			}
		});
		
		// atvaizduoti errorus jeigu tokiu yra
		if(errors.length > 0){
			showErrors(errors);
		}else{
			let cars_list = CARS;
			
			//Ieskoti masinas.	
			//FIND CARS by Brand
			if($("#Brand").val()){			
				let brand = $("#Brand").val();
				cars_list = findCarsByBrand(cars_list, brand);
			}
			
			//FIND CARS by Model
			if($("#Models").val()){			
				let model = $("#Model").val();
				cars_list = findCarsByModel(cars_list, model);
			}
			
			//FIND CARS by HP
			let hp_from_val = $("#hp_from").val();
			let hp_to_val = $("#hp_to").val();
			cars_list = findCarsByHP(cars_list, hp_from_val, hp_to_val);
			
			//FIND CARS by Date
			let date_from_val = $("#date_from").val();
			let date_to_val = $("#date_to").val();
			if(date_from_val && date_to_val){
				cars_list = findCarsByDate(cars_list, date_from_val, date_to_val);
			}
			
			//Display found cars;
			showCars(cars_list);
			
			getLowerMilage(cars_list);
		}	
	});
});


function showErrors(errors){
	var h = "";
	for(var i = 0;i<errors.length;i++){
		h = h + "<p class='error_msg'>"+errors[i]+"</p>";
	}
	$("#result").html(h);
}

// Filtruoja pagal Branda
function findCarsByBrand(array, brand){	
	let brandArray = array.filter(function (car) {
		return car.brand.toLowerCase() == brand.toLowerCase();
	});
	return brandArray;
}
//Filtruoja pagal Modeli
function findCarsByModel(array, model){	
	let modelArray = array.filter(function (car) {
		return car.model.toLowerCase() == model.toLowerCase();
	});
	return modelArray;
}

//Filtruoja pagal "power" 
function findCarsByHP(array, hp_from_val, hp_to_val){
	let hp_from = 0;
	let hp_to = 9999999;
	
	if(hp_from_val){
		hp_from = parseInt(hp_from_val);		
	}
	
	if(hp_to_val){		
		hp_to = parseInt(hp_to_val);		
	}
	
	let cararray = array.filter(function (car) {
		return car.power >= hp_from && car.power <= hp_to;
	});	
	return cararray;
}

//Filtruoja pagal Data
function findCarsByDate(array, date_from_val, date_to_val){
	let d_from = new Date(date_from_val);//'2005-01-02'
	let d_to = new Date(date_to_val);//'2005-01-02'
	//console.log("FROM: year:"+d_from.getFullYear()+ " month:"+d_from.getMonth() + 1+ " day:"+d_from.getDate());
	//console.log("TO: year:"+d_to.getFullYear()+ " month:"+d_to.getMonth() + 1+ " day:"+d_to.getDate());
	
	let cararray = array.filter(function (car) {
		let car_date = new Date(car.date);
		let day = car_date.getDate();
		let month = car_date.getMonth() + 1;
		let year = car_date.getFullYear();
		//console.log(d_from.getTime() +" "+car_date.getTime()+" "+d_to.getTime());
		//console.log("year:"+year+" month:"+month+" day:"+day);
		return car_date.getTime() >= d_from.getTime() && car_date.getTime() <= d_to.getTime();
	});	
	//console.log("car array grazina:"+cararray.length);
	return cararray;
}

function showCars(array){
	let h = "";
	for(var i = 0;i<array.length;i++){
		h = h + displayCar(array[i]);
	}
	$("#searchResults").html(h);
}

function clearResults(){
	$("#searchResults").html("");
	$("#result").html("");
}

function getLowerMilage(cars){
	if(cars.length > 0){
		var car = cars[0];
		
		for(var i = 0;i<cars.length;i++){
			if(car.mileage > cars[i].mileage){
				car = cars[i];
			}
		}
		$("#result").html(displayCar(car));
	}	
}

function displayCar(c){		
		let h = "";
			h = h + "<h2>"+c.brand+" "+c.model+"</h2>";
			h = h + "<img class='carImg' src='img/"+c.brand+".png'  alt='"+c.brand+"' />";
			h = h + "<table>";
			h = h + "<tr><th>HP:</th><td>"+c.power+"</td></tr>";
			h = h + "<tr><th>Seats:</th><td>"+c.seats+"</td></tr>";
			h = h + "<tr><th>Mileage:</th><td>"+c.mileage+"</td></tr>";
			h = h + "<tr><th>Date:</th><td>"+c.date+"</td></tr>";
			h = h + "<tr><th>Region:</th><td>"+getCountry(c.brand)+"</td></tr>";
			h = h + "</table>";
			h = h + "<div class='separator'></div>";
		return h;
}
