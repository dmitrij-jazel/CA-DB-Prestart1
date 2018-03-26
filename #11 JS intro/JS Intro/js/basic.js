let test_input = document.getElementById("Test");

// basic function
function PrintWord(){
    let word = test_input.value;
    console.log(word);
}




function Sum(){
    let a_string = document.getElementById("txt_a").value;
    let b_string = document.getElementById("txt_b").value;

    let a = Number(a_string);
    let b = Number(b_string);

    let rez = a + b;

    console.log(rez);

}