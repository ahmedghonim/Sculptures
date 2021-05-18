
let wid = $(".SCmenu").css("height")
let start_zero = _ => {
    $(".SCmenu").css("height") == wid ? $(".SCmenu").animate({ "height": "0px" }, function () {
        $(".fa-running").fadeOut(1000)
        $(".fa-palette").fadeOut(1000)
    }) : $(".SCmenu").animate({ "height": `${wid}` }, function () {
        $(".fa-running").fadeIn()
        $(".fa-palette").fadeIn()
    })
}
// start_zero()
$('.fa-bars').click(start_zero);

let wid2 = $('.range-slider').css("width")
let startRingZero = _ => {
    if ($('.range-slider').css("width") == "0px") {
        $(".range-slider ").animate({ width: `${wid2}` })
        $(".colorcontainer ").animate({ width: `0px` })
    } else {
        $(".range-slider").animate({ width: `0px` },function () {
            
        })
    }

}
startRingZero()
$(".fa-running").click(startRingZero);


let wid3 = $('.colorcontainer').css("width")
let strtColorZero = _ => {

    if ($('.colorcontainer').css("width") == `${wid3}`) {
        $(".colorcontainer ").animate({ width: `0px` })
    } else {
        $(".colorcontainer").animate({ width: `${wid3}` })
        $(".range-slider").animate({ width: `0px` })
        

    }

}
strtColorZero()
$(".fa-palette").click(strtColorZero);
// (function () {
// //     $(".colorBox").fadeOut(1000);
// //     $("input").fadeOut(1000);
// // })()
