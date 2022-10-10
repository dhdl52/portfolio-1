let win = window,
  winSct,
  sections = document.querySelectorAll(".section"),
  gnb = document.querySelectorAll(".gnb li"),
  sideNav = document.querySelectorAll(".sideNav>li");

const gnbOff = () => {
  gnb.forEach((o) => {
    o.classList.remove("on");
  });
}; //입력함수
const navOff = () => {
  sideNav.forEach((x) => {
    x.classList.remove("on");
  });
};
gnb.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(el.firstChild.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    gnbOff();
    navOff();
    el.classList.add("on");
  });
});

sideNav.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(el.firstChild.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navOff();
    el.classList.add("on");
  });
});
win.addEventListener("scroll", function (e) {
  e.preventDefault();
  winSct = this.scrollY;
  winSct >= 600
    ? document.querySelector("header").classList.add("sticky")
    : document.querySelector("header").classList.remove("sticky");
  scrollOn(winSct);
});

const scrollOn = (sct) => {
  if (sct >= sections[0].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(1)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(1)").classList.add("on");
  }
  if (sct >= sections[1].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(2)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(2)").classList.add("on");
  }
  if (sct >= sections[2].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(3)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(3)").classList.add("on");
    // sections[2].classList.add("on");
  }
  if (sct >= sections[3].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(3)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(4)").classList.add("on");
  }
  if (sct >= sections[4].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(3)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(5)").classList.add("on");
  }
  if (sct >= sections[5].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(3)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(6)").classList.add("on");
  }
  if (sct >= sections[6].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(3)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(7)").classList.add("on");
  }
  if (sct >= sections[7].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(3)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(8)").classList.add("on");
  }
  if (sct >= sections[8].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(9)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(9)").classList.add("on");
  }
  if (sct >= sections[9].offsetTop - 500) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(10)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(10)").classList.add("on");
  }
};

//button

document
  .querySelectorAll(".button")
  .forEach(
    (button) =>
      (button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );

//마우스커서;
// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;

//   cursor.style.top = y + "px";
//   cursor.style.left = x + "px";
//   cursor.style.display = "block";

//   function mouseStopped() {
//     cursor.style.display = "none";
//   }
//   timeout = setTimeout(mouseStopped, 1000);
// });
