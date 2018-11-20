let position = 0, $img = $(".container img"), len = $img.length,timer = null;
$img.first().addClass("current").siblings().addClass("enter");

timer = setInterval(() => {
    setLeave($img.eq(formateRange(position))).one("transitionend",(e)=>{
        setEnter($(e.currentTarget));
    });
    setCurrent($img.eq(formateRange(position+1)));
    position++;
}, 3000);

































function formateRange(i){
    if(i >= len){
        i = i % len;
    }
    return i;
}

function setCurrent($node){
    return $node.removeClass("enter").addClass("current");
}
function setLeave($node){
    return $node.removeClass("current").addClass("leave")
}
function setEnter($node){
    return $node.removeClass("leave").addClass("enter");
}
