/* 포트폴리오 탭 */
let tabWrapper = $(".tab_wrapper"),
  targetLink = tabWrapper.find(".tab_menu a"),
  tabContent = tabWrapper.find("#tab_content>div");
targetLink.each(function (i, e) {
  let tg = $(this);
  let tgAnc = tg.attr("href");
  tg.click(function (e) {
    e.preventDefault();
    targetLink.removeClass("active");
    tg.addClass("active");
    tabContent.hide();
    $(tgAnc).show();
  });
});
tabContent.eq(0).show();

// 호버고정

$(".tab_menu li").click(function () {
  $(this).addClass("on").siblings().removeClass("on");
});

//모달창
var modal = $("#pf_modal"),
  modalThumb = $(".graphic_thumb .modal"),
  modalClose = modal.find(".close"),
  modalImg = modal.find("img");

modalThumb.each(function () {
  $(this).click(function (e) {
    e.preventDefault();

    var showFull = $(this).find("img").attr("data-src");
    open(modal);
    modalImg.attr("src", showFull);
  });
});

modalClose.click(function (e) {
  e.preventDefault();
  close(modal);
});

modal.click(function () {
  close(modal);
});

function open(el) {
  el.removeClass("hidden");
}

function close(el) {
  el.addClass("hidden");
}
