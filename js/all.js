$(document).ready(function(){
    var $simg = $(".simg"),
        $bigimg = $(".bigimg"),
        $li = $("li"),
        $mov = $(".mov");
    $li.hover(function(){
        var index = $(this).index();
        // console.log(index)
        // console.log($simg)
        $(this).addClass("hover").siblings().removeClass("hover");
        $simg.find("img").attr("src","./images/big" + (index+1) + ".jpg");
        $bigimg.find("img").attr("src","./images/big" + (index+1) + ".jpg");
    },function(){
        $simg.siblings().removeClass("hover");
    });
    $simg.hover(function(e){
        $mov.show();
        $bigimg.show();
        $simg.mousemove(function(e){
            $simg.css("cursor","move")
            var X = e.clientX;
            var Y = e.clientY;
            var top = $simg.offset().top;
            var left = $simg.offset().left;
            // console.log(top,left)
            var movW = $mov.width();
            var movH = $mov.height();
            var _x = X - left - movW/2;
            var _y = Y - top - movH/2;
            // console.log(_y,_x)
            var simgW = $simg.width();
            var simgH = $simg.height();
            var bimgW = $bigimg.width();
            var bimgH = $bigimg.height();
            var imgW = $bigimg.find("img").width();
            var imgH = $bigimg.find("img").height();
            // console.log(bimgW,bimgW)
            var movx = simgW - movW;
            var movy = simgH - movH;
            var bmovx = imgW - bimgW;
            var bmovy = imgH - bimgH;
            var ratioW = bmovx/movx;
            var ratioH = bmovy/movy;
            console.log(ratioW,ratioH)
            // console.log( _x,_y )
            if(_x < 0){
                _x = 0;
            }else if(_x > movx){
                _x = movx;
            };
            if(_y < 0){
                _y = 0;
            }else if(_y > movy){
                _y = movy;
            };
            $mov.css({
                "left": _x,
                "top": _y
            });
            $bigimg.find("img").css({
                "left": -_x*ratioW,
                "top": -_y*ratioH
            })
        })
    },function(){
        $mov.hide();
        $("#magnify .bigimg").hide();
    });
})