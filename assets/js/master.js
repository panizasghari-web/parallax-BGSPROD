// ********************************** START CURSOR **********************************

let cursorParent = document.getElementById("custome-cursor-parent");
let cursorChild = document.getElementById("custome-cursor-child");

window.addEventListener("mouseover", () => {
  cursorParent.style.display = "block";
  cursorChild.style.display = "block";
});

window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursorParent.style.top = y + "px";
  cursorParent.style.left = x + "px";
  cursorChild.style.top = `${y + 15}px`;
  cursorChild.style.left = `${x + 15}px`;
  cursorChild.style.transform = "translate(-50%, -50%)";
  cursorParent.style.transition = "0s";
});

window.addEventListener("mousedown", () => {
  cursorParent.style.transform = "scale(0.25)";
  cursorParent.style.transition = ".4s";
  cursorChild.style.transform = "translate(-50%, -50%) scale(1.25)";
});

window.addEventListener("mouseup", () => {
  cursorParent.style.transform = "scale(1)";
  cursorParent.style.transition = ".4s";
  cursorChild.style.transform = "translate(-50%, -50%) scale(1)";
});

window.addEventListener("mouseout", () => {
  cursorParent.style.display = "none";
  cursorChild.style.display = "none";
});

// ********************************** END CURSOR **********************************

// ********************************** START CLOUDS **********************************

let cloudAnimate = document.querySelectorAll(".cloud-animate");

const animateCloud = [
  { transform: "translateX(0)" },
  { transform: "translateX(60vw)" },
  { transform: "translateX(0)" },
];

const cloudTiming = {
  duration: 700000,
  iterations: Infinity,
};

cloudAnimate.forEach((cloud) => {
  cloud.animate(animateCloud, cloudTiming);
});

// ********************************** END CLOUDS **********************************

// ********************************** START HEADER SCROLL **********************************
let mainTag = document.getElementById("main");
let spanTag = document.getElementsByTagName("span")[0];
let mountains = document.getElementById("mountains");
let rocks = document.getElementById("rocks");
let clouds = document.getElementById("clouds");

mainTag.addEventListener("scroll", (e) => {
  let temp = e.target.scrollTop;
  spanTag.innerHTML = temp;

  if (temp > mountains.offsetTop) {
    scrollMountAnim();
    scrollRocksAnim();
    scrollCloudsAnim();
  }
});

function scrollMountAnim() {
  const MountainsAnim = [
    { transform: "translateY(0)" },
    { transform: "translateY(-10px)" },
    { transform: "translateY(0)" },
  ];

  const MountainsTiming = {
    duration: 1500,
    iterations: 1,
  };

  mountains.animate(MountainsAnim, MountainsTiming);
}

function scrollRocksAnim() {
  const rocksAnim = [
    { transform: "translateY(0)" },
    { transform: "translateY(-5px)" },
    { transform: "translateY(0)" },
  ];

  const rocksTiming = {
    duration: 1500,
    iterations: 1,
  };

  rocks.animate(rocksAnim, rocksTiming);
}

function scrollCloudsAnim() {
  const cloudsAnim = [
    { transform: "translateY(0)" },
    { transform: "translateY(-10px)" },
    { transform: "translateY(0)" },
  ];

  const cloudsTiming = {
    duration: 2000,
    iterations: 1,
  };

  clouds.animate(cloudsAnim, cloudsTiming);
}

// ********************************** END HEADER SCROLL **********************************

// ********************************** START SEC1 SCROLL **********************************
let firstHeadSec = document.getElementById("first-head-txt");
let secondHeadSec = document.getElementById("second-head-txt");

firstHeadSec.style.transform = "translateY(350px)";
firstHeadSec.style.opacity = 0;
firstHeadSec.style.transition = "opacity 0.25s ease, transform 0.5s ease 0.5s";

secondHeadSec.style.transform = "translateY(350px)";
secondHeadSec.style.opacity = 0;
secondHeadSec.style.transition = "opacity 0.25s ease, transform 0.5s ease 0.5s";

mainTag.addEventListener("scroll", (e) => {
  let temp = e.target.scrollTop;
  if (temp - 150 > firstHeadSec.offsetTop) {
    firstHeadSec.style.opacity = 1;
    firstHeadSec.style.transform = "translateY(0)";
  }
  if (temp - 150 > secondHeadSec.offsetTop) {
    secondHeadSec.style.opacity = 1;
    secondHeadSec.style.transform = "translateY(0)";
  }
});

// ********************************** END SEC1 SCROLL **********************************

// ********************************** START SEC2 SCROLL **********************************
let firstCol1 = document.getElementById("1st-col1");
let firstCol2 = document.getElementById("1st-col2");
let secondCol1 = document.getElementById("2nd-col1");
let secondCol2 = document.getElementById("2nd-col2");

firstCol1.style.transform = "translateX(-350px)";
firstCol1.style.opacity = 0;
firstCol1.style.transition = "opacity 0.25s ease, transform 0.5s ease 0.5s";

firstCol2.style.transform = "translateX(350px)";
firstCol2.style.opacity = 0;
firstCol2.style.transition = "opacity 0.25s ease, transform 0.5s ease 0.5s";

secondCol1.style.transform = "translateX(-350px)";
secondCol1.style.opacity = 0;
secondCol1.style.transition = "opacity 0.25s ease, transform 0.5s ease 0.5s";

secondCol2.style.transform = "translateX(350px)";
secondCol2.style.opacity = 0;
secondCol2.style.transition = "opacity 0.25s ease, transform 0.5s ease 0.5s";

mainTag.addEventListener("scroll", (e) => {
  let temp = e.target.scrollTop;
  if (temp + 150 > firstCol1.offsetTop) {
    firstCol1.style.opacity = 1;
    firstCol1.style.transform = "translateX(0)";
  }
  if (temp + 150 > firstCol2.offsetTop) {
    firstCol2.style.opacity = 1;
    firstCol2.style.transform = "translateX(0)";
  }
  if (temp + 300 > secondCol1.offsetTop) {
    secondCol1.style.opacity = 1;
    secondCol1.style.transform = "translateX(0)";
  }
  if (temp + 300 > secondCol2.offsetTop) {
    secondCol2.style.opacity = 1;
    secondCol2.style.transform = "translateX(0)";
  }
});
// ********************************** END SEC2 SCROLL **********************************

// ********************************** START CONTACT BUTTON **********************************
let contactButton = document.getElementById("contact-button");
let contactButtonBg = document.getElementById("contact-button-bg");
let contactButtonReal = document.getElementById("contact-button-real");

contactButtonReal.addEventListener("mouseenter", (e) => {
  contactButtonAnimReal();
  contactButtonAnimBg();
});

function contactButtonAnimReal() {
  const contactAnim = [
    { transform: "translateX(0)" },
    { transform: "translateX(30px)" },
    { transform: "translateX(-30px)" },
    { transform: "translateX(0)" },
  ];

  const contactTiming = {
    duration: 1000,
    iterations: 1,
  };

  contactButtonReal.animate(contactAnim, contactTiming);
}

function contactButtonAnimBg() {
  const contactAnim2 = [
    { transform: "translateX(0)" },
    { transform: "translateX(25px)" },
    { transform: "translateX(-25px)" },
    { transform: "translateX(0)" },
  ];

  const contactTiming2 = {
    duration: 1500,
    iterations: 1,
  };

  contactButtonBg.animate(contactAnim2, contactTiming2);
}

// ********************************** END CONTACT BUTTON **********************************
