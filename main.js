// todo:

let position, timer, $img, len, $dot, lastPosition;
Init();


$dot.each((x, item) => {
    $(item).on("click", function () {
        position = x;
        move(position);
    })
})

$('#wrapper').on("mouseleave", function () {
    timer = setInterval(function () {
        move(position);
        position++;
    }, 3000)
}).on("mouseenter", function () {
    clearInterval(timer);
}).trigger("mouseleave")

function move(i) {

    setEnter(setRange(i + 1));
    setCurrent(setRange(i))
    setLeave(setRange(i - 1));


    $dot.eq(setRange(i)).addClass("red").siblings().removeClass("red");

}


function setRange(x) {
    if (x >= len) {
        x = x % len;
    }
    return x;
}

function Init() {
    position = 0;
    timer = null;
    $img = $(".container img");
    len = $img.length;
    $dot = $(".dot span");
}

function setLeave(i) {
    return $img.eq(i).removeClass("enter current").addClass("leave");
}

function setCurrent(i) {
    return $img.eq(i).removeClass("leave enter").addClass("current")
}

function setEnter(i) {
    return $img.eq(i).removeClass("current leave").addClass("enter")
}