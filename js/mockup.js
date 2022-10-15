const hiddens = document.querySelectorAll(".hidden");
const thumbs = document.querySelectorAll(".hidden>img"); 
hiddens.forEach(function (hidden) {
  hidden.addEventListener("mouseenter", function (e) {
    e.preventDefault(); 
    const tg = e.target;
    const tgH = tg.offsetHeight;
    const tgThumb = tg.firstChild;
    const tgThumbH = tgThumb.offsetHeight;
    tgThumb.style.top = tgH - tgThumbH + "px"; 
  });
  hidden.addEventListener("mouseleave", function (x) {
    x.preventDefault();
    const tg = x.target;
    const tgH = tg.offsetHeight;
    const tgThumb = tg.firstChild;
    const tgThumbH = tgThumb.offsetHeight;
    tgThumb.style.top = "0" + "px";
  });
});

// 양옆애니메이션
$(window).scroll(function () {
  var sct = $(window).scrollTop();
  var sections = [
    {
      section: $("#project1").offset().top,
      left: $("section .p1_left"),
      right: $("section .p1_right"),
    },
    {
      section: $("#project2").offset().top,
      left: $("section .p2_left"),
      right: $("section .p2_right"),
    },
    {
      section: $("#project3").offset().top,
      left: $("section .p3_left"),
      right: $("section .p3_right"),
    },
    {
      section: $("#project4").offset().top,
      left: $("section .p4_left"),
      right: $("section .p4_right"),
    },
    {
      section: $("#project5").offset().top,
      left: $("section .p5_left"),
      right: $("section .p5_right"),
    },
    {
      section: $("#project6").offset().top,
      left: $("section .p6_left"),
      right: $("section .p6_right"),
    },
  ];

  if (sct > sections[0].section - 350) {
    sections[0].left.stop().animate({ left: "10px" }, 1000);
    sections[0].right.stop().animate({ right: "10px" }, 1000);
  } 
  else {
    sections[0].left.stop().animate({ left: "-600px" }, 1000);
    sections[0].right.stop().animate({ right: "-600px" }, 1000);
  }
  if (sct > sections[1].section - 350) {
    sections[1].left.stop().animate({ left: "10px" }, 1000);
    sections[1].right.stop().animate({ right: "10px" }, 1000);
  } else {
    sections[1].left.stop().animate({ left: "-600px" }, 1000);
    sections[1].right.stop().animate({ right: "-600px" }, 1000);
  }
  if (sct > sections[2].section - 350) {
    sections[2].left.stop().animate({ left: "10px" }, 1000);
    sections[2].right.stop().animate({ right: "10px" }, 1000);
  } else {
    sections[2].left.stop().animate({ left: "-600px" }, 1000);
    sections[2].right.stop().animate({ right: "-600px" }, 1000);
  }
  if (sct > sections[3].section - 350) {
    sections[3].left.stop().animate({ left: "10px" }, 1000);
    sections[3].right.stop().animate({ right: "10px" }, 1000);
  } else {
    sections[3].left.stop().animate({ left: "-600px" }, 1000);
    sections[3].right.stop().animate({ right: "-600px" }, 1000);
  }
  if (sct > sections[4].section - 350) {
    sections[4].left.stop().animate({ left: "10px" }, 1000);
    sections[4].right.stop().animate({ right: "10px" }, 1000);
  } else {
    sections[4].left.stop().animate({ left: "-600px" }, 1000);
    sections[4].right.stop().animate({ right: "-600px" }, 1000);
  }
  if (sct > sections[5].section - 350) {
    sections[5].left.stop().animate({ left: "10px" }, 1000);
    sections[5].right.stop().animate({ right: "10px" }, 1000);
  } else {
    sections[5].left.stop().animate({ left: "-600px" }, 1000);
    sections[5].right.stop().animate({ right: "-600px" }, 1000);
  }
});


