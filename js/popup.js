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
