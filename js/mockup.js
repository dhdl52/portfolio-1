const hiddens = document.querySelectorAll(".hidden");
const thumbs = document.querySelectorAll(".hidden>img"); //여러개 디바이스 추가할때 thumbs이름다르게!
// console.log(`hiddens:${hiddens}//thumbs:${thumbs}`);
hiddens.forEach(function (hidden) {
  hidden.addEventListener("mouseenter", function (e) {
    //(이벤트 내용을 작성,할일(e브라우저에서 전달받는 정보를 가져옴)) \
    //addEventListener가 있어야 e를 쓸수있음!!!
    //clientX 마우스 포인트 이벤트할때 쓸쑤있는 속섬?
    e.preventDefault(); //열어서 .으로 연결시켜주면됨
    //console.log(e.target.offsetHeight); //함수 실행문안으로 가져옴(마우스올렸을때)
    const tg = e.target;
    const tgH = tg.offsetHeight;
    const tgThumb = tg.firstChild;
    const tgThumbH = tgThumb.offsetHeight;
    tgThumb.style.top = tgH - tgThumbH + "px"; //음수가 나와야 위로 올라간다.
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

// 양옆
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


