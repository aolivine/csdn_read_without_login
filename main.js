// 判断“阅读更多”按钮是否存在并模拟点击
// if(exist('#btn-readmore')){
//     exist('#btn-readmore').click()
// }
var habElement = document.getElementsByClassName("hide-article-box text-center")[0];
habElement.parentNode.removeChild(habElement);
document.getElementById("article_content").removeAttribute("style");
// 登录叉号的模拟点击
// var cancel='body > div.pulllog-box > div > div > button.btn-close';
// if(exist(cancel)){
//     exist(cancel).click()
// }

// // 各处广告的隐藏
// var css1='#mainBox > aside > div.csdn-tracking-statistics.mb8.box-shadow'; // 广告1
// var css2='#asideFooter > div:nth-child(1)'; // 广告2
// var css3='#_360_interactive'; //抽奖元素
// var css4='#dmp_ad_58'; //文末广告
// var css=[css1,css2,css3,css4];

// for(var i=0; i<css.length; i++){
// 	if(exist(css[i])){
// 		exist(css[i]).style.display="none";
// 	}
// }

// // 判断元素是否存在
// function exist(css) {
//     if(document.querySelector(css)){
//         return document.querySelector(css)
//     }
//     else{
//         return false
//     }
// }
// // 把底部滚动条挪到合适的位置
// document.body.onclick=moveRight;

// function moveRight() {
//     document.documentElement.scrollLeft=390;
// }

