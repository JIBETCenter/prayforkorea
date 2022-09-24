var flag = false;

function resize() {
    var $intro = document.getElementById("intro").offsetTop;
    var $one = document.getElementById("one").offsetTop;
    var $two = document.getElementById("two").offsetTop;
    var $work = document.getElementById("work").offsetTop;
    return [$intro, $one, $two, $work];
}

let sized = resize();

window.onresize = function () {
    sized = resize();
};

var aArr = document.querySelectorAll("a");

aArr.forEach((el) => {
    let attr = el.getAttribute("data-go");
    el.addEventListener("click", () => {
        if (attr == "intro") return intro();
        if (attr == "one") return one();
        if (attr == "two") return two();
        if (attr == "work") return work();
    });
});

function intro() {
    window.scrollTo({ top: sized[0], behavior: "smooth" });
}
function one() {
    window.scrollTo({ top: sized[1], behavior: "smooth" });
}
function two() {
    window.scrollTo({ top: sized[2], behavior: "smooth" });
}
function work() {
    window.scrollTo({ top: sized[3], behavior: "smooth" });
}

window.addEventListener(
    "mousewheel",
    (e) => {
        e.preventDefault();
        let sized = resize();
        if (e.deltaY > 0 && flag === false) {
            if (e.pageY < sized[1]) {
                flag = true;
                setInterval(
                    window.scrollTo({ top: sized[1], behavior: "smooth" }),
                    1000
                );
                flag = false;
            } else if (e.pageY < sized[2]) {
                flag = true;
                setInterval(
                    window.scrollTo({ top: sized[2], behavior: "smooth" }),
                    1000
                );
                flag = false;
            } else if (e.pageY < sized[3]) {
                flag = true;
                setInterval(
                    window.scrollTo({ top: sized[3], behavior: "smooth" }),
                    1000
                );
                flag = false;
            }
        } else if (e.deltaY < 0 && flag === false) {
            if (e.pageY > sized[3]) {
                flag = true;
                setInterval(
                    window.scrollTo({ top: sized[2], behavior: "smooth" }),
                    1000
                );
                flag = false;
            } else if (e.pageY > sized[2]) {
                flag = true;
                setInterval(
                    window.scrollTo({ top: sized[1], behavior: "smooth" }),
                    1000
                );
                flag = false;
            } else if (e.pageY > sized[1]) {
                flag = true;
                setInterval(
                    window.scrollTo({ top: sized[0], behavior: "smooth" }),
                    1000
                );
                flag = false;
            }
        } else return;
    },
    { passive: false }
);
