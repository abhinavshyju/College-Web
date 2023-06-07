const moreText = document.getElementById("more-text");
var ul = document.getElementById("ul1");
var ull = document.getElementById("ul2");
let moreTextClick = false;
let menuToggled = false;

const ShowMoreFunction = (btn) => {
    if (moreTextClick == false) {
        moreTextClick = true;
        btn.textContent = "Show Less";
        moreText.style.display = "block";
    } else {
        moreTextClick = false;
        moreText.style.display = "none";
        btn.textContent = "Show More";
    }
};

const MobileMenu = (btn) => {
    console.log("worked");
    if (menuToggled == false) {
        menuToggled = true;
        ul.style.display = "block";
        ul2.style.display = "block";
        btn.style.transform = "translate(-200px)";
    } else {
        menuToggled = false;
        ul.style.display = "none";
        ull.style.display = "none";
        btn.style.transform = "translate(0px)";
    }
};
