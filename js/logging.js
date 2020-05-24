var evnts = ["click", "focus", "blur", "keyup", "keydown", "keypressed"];
// You can also Use mouseup/down, mousemove, resize and scroll
for (var i = 0; i < evnts.length; i++) {
    window.addEventListener("" + evnts[i] + "", function(e) {
        myFunction(e);
    }, false);
}

function myFunction(e) {
    var evt = e || window.event;
    if (evt) {
        if (evt.isPropagationStopped && evt.isPropagationStopped()) {
            return;
        }
        var et = evt.type ? evt.type : evt;
        var trgt = evt.target ? evt.target : window;
        var time = Math.floor(Date.now() / 1000);
        var x = 0,
            y = 0,
            scrolltop = 0;
        if (evt.pageX) {
            x = evt.pageX;
        }
        if (evt.pageY) {
            y = evt.pageY;
        }
        if (trgt.scrollTop) {
            scrolltop = trgt.scrollTop;
        }
        if (trgt.className && trgt.id) {
            trgt = "." + trgt.className + "#" + trgt.id;
        } else if (trgt.id) {
            trgt = "#" + trgt.id;
        } else if (trgt.className) {
            trgt = "." + trgt.className;
        }

        if (typeof(trgt) != "String") {
            if (trgt.tagName) {
                trgt = trgt.tagName;
            } else {
                trgt = trgt.toString().toLowerCase();
                trgt = trgt.replace("[object ", "");
                trgt = trgt.replace("]", "");
                trgt = trgt.replace("htmlbodyelement", "BODY");
            }
        }
        var xtra = "";
        if (evt.keyCode) {
            xtra += " KeyCode: " + evt.keyCode;
        }
        if (evt.shiftKey) {
            xtra += " ShiftKey ";
        }
        if (evt.altKey) {
            xtra += " altKey ";
        }
        if (evt.metaKey) {
            xtra += " metaKey ";
        }
        if (evt.ctrlKey) {
            xtra += " ctrlKey ";
        }
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            xx = w.innerWidth || e.clientWidth || g.clientWidth,
            yy = w.innerHeight || e.clientHeight || g.clientHeight;
        xtra += " RES:" + xx + "X" + yy;

        //console.log(et,trgt,x,y,scrolltop,time,xtra);
    }
}
