
$('.fa-bars').click(function () {
    if ($(".SCmenu").css("height") == "0px") {

        $(".SCmenu").css({ "height": "90px" })
    } else {
        $(".SCmenu").animate({ height: "0px" })

    }

});

$(".fa-running").click(function () {
    let wid = $('.range-slider').innerWidth()

    console.log(wid);
    if ($('.sid-mnu').css("right") == "0px") {
        console.log(wid);
        $(".sid-mnu").animate({ right: `-${wid}px` }, function () {

            $("input").fadeOut(1000);
        })

    } else {

        console.log(wid);

        $(".sid-mnu ").animate({ right: `${0}` }, function () {

            $("input").fadeIn(1000);

        })

    }

});

$(".fa-palette").click(function () {
    let wid = $('.colorcontainer').innerWidth()

    if ($('.sid-mnu').css("right") == "0px") {

        console.log(wid);
        $(".sid-mnu").animate({ right: `-${wid}px` }, function () {

            $(".colorBox").fadeOut(1000);
        })

    } else {

        console.log(wid);

        $(".sid-mnu ").animate({ right: `${0}` }, function () {

            $(".colorBox").fadeIn(1000);

        })

    }

});
// (function () {
// //     $(".colorBox").fadeOut(1000);
// //     $("input").fadeOut(1000);
// // })()
