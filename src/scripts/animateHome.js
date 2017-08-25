var maxspeed = 0.05;
var minspeed = 0.01;

var speed = maxspeed;

var radius = 200;

var count = 0;

function rotate() {
    var centerX = $(document).width() / 2;
    var centerY = $(document).height() / 2;

    var num_items = $(".menuitem").length;

    $(".menuitem").each(function() {
        var angle = count * (Math.PI / 180);

        var newX = centerX + Math.cos(angle) * radius - ($(this).width() / 2);
        var newY = centerY + Math.sin(angle) * radius - ($(this).height() / 2);

        $(this).css("left", newX + "px").css("top", newY + "px");

        count += (360 / num_items) + speed;
    })
};


$(document).ready(function() {

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".menuitem").css("z-index", -10);
    setInterval(rotate, 3000 / 360);
    $(document).mousemove(function(e) {
        var docWidth = $(document).width();
        var docHeight = $(document).height();

        var itemWidth = $(".menuitem").width();
        var itemHeight = $(".menuitem").height();

        var leftSide = ((docWidth / 2) - radius - (itemWidth / 2));
        var rightSide = ((docWidth / 2) + radius + (itemWidth / 2));
        var topSide = ((docHeight / 2) + radius + (itemHeight / 2));
        var bottomSide = ((docHeight / 2) - radius - (itemHeight / 2));

        if (e.pageX > leftSide && e.pageX < rightSide && e.pageY > bottomSide && e.pageY < topSide) {
            speed = minspeed;
        } else {
            speed = maxspeed;
        }
    });
    $(".menuitem").hover(function() {
            $(this).animate({ "width": 150, "height": 150 }, 100);
            $(this).css("z-index", 10);
        },
        function() {
            $(this).animate({ "width": 125, "height": 125 }, 100);
            $(this).css("z-index", -10);
        }
    );

});