console.log(
  "%c ☁️ hexo-theme-yun %c https://github.com/YunYouJun/hexo-theme-yun",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);

// scroll
function scrollPercent(curTop) {
  const bodyHeight = document.body.clientHeight;
  const windowHeight = window.innerHeight;
  const circumference = progressCircle.r.baseVal.value * 2 * Math.PI;
  const offset =
    circumference - (curTop / (bodyHeight - windowHeight)) * circumference;
  progressCircle.setAttribute(
    "stroke-dasharray",
    `${circumference} ${circumference}`
  );
  progressCircle.setAttribute("stroke-dashoffset", offset);
}

function initPage() {
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".post-card");
  }

  // open sidebar
  document.querySelector(".sidebar-toggle").onclick = function() {
    this.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".container").classList.toggle("sidebar-open");
  };

  window.addEventListener("scroll", function() {
    goUp.classList.toggle("show", window.scrollY > 64);
    scrollPercent(window.scrollY);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
// var title2="msg=ZSblog又有新评论啦~！--by Valine\n"
// var SCKEY_Qmsg="https://qmsg.zendee.cn:443/send/512607f8e55eea7dbbf735b2de3d2d7e.html"
// var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
// function send_valine_Qmsg(){
//     var pagename=document.title;
//     var wz=pagename.indexOf('|');
//     var res=pagename.substring(0,wz);
//     var pageurl=document.URL;
//     var ptime=new Date();
//     var vnick=document.getElementsByClassName("vnick vinput")[0].value;
//     var vmail=document.getElementsByClassName("vmail vinput")[0].value;
//     var vlink=document.getElementsByClassName("vlink vinput")[0].value;
//     var veditor=document.getElementsByClassName("veditor vinput")[0].value;
//     var data="昵称："+vnick+"\n邮箱："+vmail+"\n网站地址："+vlink+"\n当前页面："+pagename+"\n评论内容："+veditor+"\n跳转链接："+pageurl+"\n评论时间"+ptime.toLocaleString();
//     var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
//     httpRequest.open('POST',SCKEY_Qmsg, true); //第二步：打开连接
//     httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
//     httpRequest.send(title2+data);//发送请求 将情头体写在send中
// };
// ValineButton.onclick=send_valine_Qmsg;