//MAKE THE MAGIC HAPPEN
//Anna Andrlová, wateringcan
var waterdrop = $(".waterdrop");
waterdrop.css({"display": "none"});
var wateringcan = $("#wateringcan");
var transform = true;
var position = wateringcan.position();

$(".drops").css({
    "left": position.left,
    "top": position.top - 20,
    "right": position.right,
});
wateringcan.on("click", function () {
    if (transform  === true) {
        wateringcan.css("transform", "rotate(-35deg)");
        drop1();
        setTimeout( function(){
           drop2()
        }  , 100 )
        setTimeout( function(){
           drop3()
        }  , 300 )
        transform= false;


    } else {
        $(".waterdrop").stop(true);
        wateringcan.css("transform", "rotate(0deg)");
        waterdrop.css({"display": "none"});
        transform=true;

    }


})

function drop1() {
    $("#1").each(function () {
        $(this).fadeIn().offset({top: position.top}).animate({top: "90%"},"slow", function () {
            drop1()});
    })
}

function drop2() {
    $("#2").each(function () {
        $(this).fadeIn().offset({top: position.top}).animate({top: "90%"}, "slow", function () {
            drop2()});
    })
}
function drop3() {
    $("#3").each(function () {
        $(this).fadeIn().offset({top: position.top}).animate({top: "90%"}, "slow", function () {
            drop3()});
    })
}
// end of watering can


