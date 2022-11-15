//MAKE THE MAGIC HAPPEN

//BUMBLEBEE Alexandro

$(".transformer").hide();
$(".bumblebee").click(function(){
    $(".transformer").show();
});
$(".transformer").click(function(){
    $(".transformer").hide();
});

//TREE, APPLES Alexandro

$(document).ready(function() {
    $('.apple').each(function(idx, img) {
        $(img).css({
            left: Math.random() * ($('.randDiv').width() - $(this).width()),
            top: Math.random() * ($('.randDiv').height() - $(this).height())
        });
    });
});

