//MAKE THE MAGIC HAPPEN

//BUMBLEBEE Alexandro

$(".transformer").hide();
$(".bumblebee").on("click", function(){
    $(".transformer").show();
    console.log("Works");
});
$(".transformer").on("click", function(){
    $(".transformer").hide();

    console.log("Works");
});

//APPLES Alexandro

$(document).ready(function() {
    $(".apple").each(function(idx, img) {
        $(img).css({
            left: Math.random() * ($(".randDiv").width() - $(this).width()),
            top: Math.random() * ($(".randDiv").height() - $(this).height())
        });
    });
});

//Anna Andrlová, wateringcan
var waterdrop = $(".waterdrop");
waterdrop.css({"display": "none"});
var wateringcan = $("#wateringcan");
var transform = true;
var position = wateringcan.position();

$(".drops").css({
    "left": position.left,
    "top": position.top + wateringcan.height(),
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
        $(this).fadeIn().offset({top: position.top +20 }).animate({top: "90%"},"slow", function () {
            drop1()});
    })
}

function drop2() {
    $("#2").each(function () {
        $(this).fadeIn().offset({top: position.top +20}).animate({top: "90%"}, "slow", function () {
            drop2()});
    })
}
function drop3() {
    $("#3").each(function () {
        $(this).fadeIn().offset({top: position.top + 20}).animate({top: "90%"}, "slow", function () {
            drop3()});
    })
}

// end of watering can
// bullet shooting - Anna Andrlová

var bullet = $("#bullet");
bullet.hide();
$("#pirateShip").click(function(){
    bullet.show();
    bullet.offset({left: $("#pirateShip").position().left, top:600 })
    bullet.animate({"left":-100}, 200, "linear");
});




// Jan Metela
function raining() {
    $(".waterdrop2").each(function () {
        let x = Math.floor(Math.random() * 1000)

        $(this).offset({"top": 180}, x).delay(x).animate({"top": 800}, function () {
            raining()
        })
    })
}

function butterfly_movement() {
    $("#butterfly").animate({
        "left": Math.random() * ($(window).width() - $("#butterfly").width()),
        "top": Math.random() * ($(window).height() - $("#butterfly").height())
    }, 5000, function () {
        butterfly_movement()
    })
}


let audio = new Audio("audio/Irish Rovers - What Will We Do With a Drunken Sailor.mp3")
let ship = false

function sea_raising() {
    let y = 220
    if ($("#sea").offset().top < 200) {
        y = 0
        if (!ship) {
            $("#pirateShip").offset({left: -400})
            $("#pirateShip").show()
            audio.play()
            $("#pirateShip").animate({"left": 400}, 5000)
        }
        pirate_ship_movement()
    }

    $("#sea").animate({"left": "+=100", "top": "-=" + y}, 2000, "linear").animate({
        "left": "-=100",
        "top": "-=" + y
    }, 2000, "linear", function () {
        sea_raising()
    })
}

function pirate_ship_movement() {
    $("#pirateShip").animate({"left": Math.random() * ($(window).width() - $("#pirateShip").width())}, 8000, function () {
        pirate_ship_movement()
    })

}


$("#sea").hide()
$("#pirateShip").hide()
let x = 150
$(".waterdrop2").each(function () {
    $(this).css({"left": x})
    x += 20
})
let is_raining = false
$("#pirateShip").offset({top: 400})

$("#butterfly").bind("mouseenter", function (e) {
    $("#butterfly").stop(true)
    $("#butterfly").animate({
        "left": Math.random() * ($(window).width() - $("#butterfly").width()),
        "top": Math.random() * ($(window).height() - $("#butterfly").height())
    }, 500, function () {
        butterfly_movement()
    })
})



$("#cloud").click(function () {
        if (is_raining) {
            $(".waterdrop2").each(function () {
                $(this).stop(true)
                $(this).hide()
            })
            $("#sea").hide()
            $("#sea").stop(true)
            audio.pause()
            $("#pirateShip").stop(true)
            $("#pirateShip").hide()
            ship = false
            is_raining = false

        } else {
            $("#sea").offset({"top": $(window).height(), "left":-100})
            $("#sea").show()
            $(".waterdrop2").each(function () {
                $(this).show()
            })
            sea_raising()
            raining()
            is_raining = true
        }
    }
)

$(document).bind("mousemove", function (e) {
    $("#net").css({"left": e.pageX, "top": e.pageY})

})


butterfly_movement()

//Christos

$("#apple1").click(function (){
    $("#apple1").animate({"left":-($("#tree").offset().left - $("#basketfront").offset().left), "top": -($(".randDiv").offset().top) + $("#basketfront").offset().top })
})
$("#apple2").click(function (){
    $("#apple2").animate({"left": 20-($("#tree").offset().left - $("#basketfront").offset().left), "top": -($(".randDiv").offset().top) + $("#basketfront").offset().top })
})
$("#apple3").click(function (){
    $("#apple3").animate({"left":40-($("#tree").offset().left - $("#basketfront").offset().left), "top": -($(".randDiv").offset().top) + $("#basketfront").offset().top })
})

var change = {             //Representing the keyboard's keys
    37: {
        left: "-=1"
    },

    39: {
        left: "+=1"
    },

}
$(document).one("keydown", keyDown)

var going;

function keyDown(e) {
    console.log("down")
    $(document).one("keyup", keyup)
    var animation = change[e.which];
    going = setInterval(keepGoing, 1);

    function keepGoing() {
        $(".worm").css(animation)
    }

}

function keyup(e) {
    console.log("up")
    clearInterval(going)
    $(document).one("keydown", keyDown)
}

$("#moon").hide();
$(document).ready(function () {
    $("#sun").click(function(){
        $("body").css("background-color", "midnightblue");
        $("#sun").hide();
        $("#moon").show();

    })

    $('#moon').click(function(){
        $("body").css("background-color", "lavenderblush");
        $("#moon").hide();
        $("#sun").show();

    })
})
