$("#test").click(function () {
    $( ".mano-klase" ).fadeOut( "slow" );
});


$("#FadeOut").click(function () {
    $("#papugos").fadeOut(5000);
});

$("#FadeIn").click(function () {
    $("#papugos").fadeIn(5000);
});

$("#Example1_button").click(function () {
    //get Example 1 text
    let t1 = $("#textExample1_text").val();
    console.log(t1);
    //add text to Example 1 text result
    $("#textExample1_result").text(t1);
});