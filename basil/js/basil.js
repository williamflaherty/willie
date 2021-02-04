$(document).ready(function(){
    var rotation = 0, 
    scrollLoc = $(document).scrollTop(); //get the scroll bar position for the document
    $(window).scroll(function() {        //bind this function to the scroll event
        var newLoc = $(document).scrollTop();     //get the new location of the scroll bar
        var diff = scrollLoc - newLoc;            //figure out how far we scrolled
        rotation += diff;                         //add the difference to the rotation
        scrollLoc = newLoc;                       //make the new position the current position 
        var rotationStr = "rotate(" + rotation + "deg)";  //make a string to tell the css transformation how far to rotate
        $(".sync").css({                          //apply css transformation 
            "-webkit-transform": rotationStr,       
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
});


