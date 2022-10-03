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
