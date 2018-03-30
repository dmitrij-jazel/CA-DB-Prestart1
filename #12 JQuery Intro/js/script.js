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
    let t1 = $("#textExample1_text").val();    
    $("#textExample1_result").text(t1);
});


$("#Example2_button").click(function () {
    let t1 = $("#textExample2_text1").val();
    let t2 = $("#textExample2_text2").val();

    let merged_text = t1 + " " + t2;

    $("#textExample2_result").text(merged_text);
});

$("#textExample3").keyup(function () {
    let t1 = $("#textExample3").val();
    $("#textExample3_result").text(t1);
});

