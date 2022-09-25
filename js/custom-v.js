/*
2.변수로 잡아야 되는 것->변하는거
    윈도우 스크롤양(winSct),섹션번호(sections),메뉴(gnb)
3.gnb 클릭하면 섹션으로 부드럽게 이동시키기
 -변수로 잡아야 되는것
 -gnb 클릭
 -sections 이동(부드럽게)
4.윈도우 스크롤발생시 스티키 헤더 
5.윈도우 스크롤양에 따라 sections 번호를 알아내고 해당하는 gnb를 활성화 
*/

//약속된키워드를 써준다 아래처럼 선언
//캐릭터만드는것 처럼 하나 생성한다고 생각하면됨 장비착용전
// var winSct
// let winSct
// const winSct

// var:익스에서됨. 같은이름을 또 선언해도 오류안남.중복선언 가능
// let:익스에서안됨. 중복선언 불가
// var winSct;
// var sections;
// var gnb;
//*let winSct=window.scrollY;//우항의 값(window.scrollY)을 좌항(winSct)에 할당한다.그걸 표기하는 방법은 =으로 사용.
//= 값을 할당한다는 뜻을 가지고 있다!!! 넣는다고 생각하면됨
//    winSct<=window.scrollY  =표시! <= 이렇게 넣는다는 걸로생각하기
//*let sections=document.querySelectorAll(".section");
//값을할당할때 자동적으로  document.querySelector() 쓰기
//document.querySelectorAll() All를 써야 번호를 얻어올수있다.
//*let gnb=document.querySelectorAll(".gnb li");

//위처럼 나눠쓰는걸 아래처럼 ,합쳐서 쓸수있음
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
//function fn//선언적함수

// //console.log(gnb);//변수의 자료의 형태를 파악한다 그뒤에 적당한 함수를 찾아야한다.
gnb.forEach((el) => {
  //forEach:소괄호안에 콜백함수를 사용하는애
  //  console.log("나는 el"+el);
  el.addEventListener("click", function (e) {
    e.preventDefault(); //이벤트속성값쓰기
    // console.log("클릭 el"+el.firstChild);
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
//원하는 스크롤양의 값을 가져와서 실행한다. 모든 스크롤 이벤트는 아래같은 원리로 사용된다.
win.addEventListener("scroll", function (e) {
  e.preventDefault(); //이벤트 전부막고 차단
  winSct = this.scrollY;
  //console.log(winSct>=400);//드래그했을때 숫자찍혀야함//400부터는 true. 399는 false
  // if(winSct>=400){//오른쪽의 값과 비교시킴
  //     document.querySelector("nav").classList.add("sticky")
  // }else{
  //     document.querySelector("nav").classList.remove("sticky")
  // }
  //위 방법 아래처럼 한줄로 사용할수있음(삼항연산자)
  winSct >= 400
    ? document.querySelector("header").classList.add("sticky")
    : document.querySelector("header").classList.remove("sticky");
  //?: 삼항연산자 기본셋팅.첫번째 항에는 조건이 들어감
  //if문 한거 삼항연산자로 바꿔보고 같은식도 다른 방식으로 바꿔보면서 연습해보기...
  scrollOn(winSct);
});

const scrollOn = (sct) => {
  if (sct >= sections[0].offsetTop - 300) {
    //임의의 숫자를 빼주기
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(1)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(1)").classList.add("on");
    // sections[0].classList.add("on");
  }
  if (sct >= sections[1].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(2)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(2)").classList.add("on");
    // sections[1].classList.add("on");
  }
  if (sct >= sections[2].offsetTop - 700) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(3)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(3)").classList.add("on");
    sections[2].classList.add("on");
  }
  if (sct >= sections[3].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(4)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(4)").classList.add("on");
  }
  if (sct >= sections[4].offsetTop - 300) {
    gnbOff();
    navOff();
    document.querySelector(".gnb li:nth-child(5)").classList.add("on");
    document.querySelector(".sideNav li:nth-child(5)").classList.add("on");
  }
};

//위에거 반복문 만들어보기
// const scrollOn = [1, 2, 3];
// for (const sct of arr){
//     console.log(sct); // 10, 20, 30 출력
// }
