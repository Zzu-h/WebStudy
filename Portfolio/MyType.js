function opening_door(){
    //document.getElementById("door").src = "./img/open_door.gif"
    var target_door = document.getElementById("door")
    target_door.src="./img/opening.gif";
    target_door.style.width= `${520}px`
    target_door.style.margin= `${0}px ${42}px`
    
    

    var target_box = document.getElementsByClassName("box")[0];
    setTimeout(function(){ fadeOut(target_box) }, 4000);

    setTimeout(function(){location.href="next.html"},5000);
}
function book(submit){
  if(submit == "admin")
    location.href="next.html"
}

//fade in / out 함수 구현 참고: https://blog.naver.com/PostView.nhn?blogId=1126pc&logNo=221595349259&from=search&redirect=Log&widgetTypeCall=true&directAccess=false
function fadeIn(target){
  var level = 0;
  var inTimer = null;
  inTimer = setInterval(function(){
    level = fadeInAction(target, level, inTimer);
  }, 50);
}
function fadeInAction(target, level,inTimer){
  level = level + 0.1;
  changeOpacity(target, level);
  if(level > 1) clearInterval(inTimer);
  return level;
}

function fadeOut(target){
  var level = 1;
  var outTimer = null;
  outTimer = setInterval(function(){
    level = fadeOutAction(target, level, outTimer);
  }, 70);
}
function fadeOutAction(target, level,outTimer){
  level = level - 0.07;
  changeOpacity(target, level);
  if(level < 0) clearInterval(outTimer);
  return level;
}

function changeOpacity(target, level){
  var obj = target;
  obj.style.opacity = level;
  obj.style.MozOpacity = level;
  obj.style.KhtmlOpacity = level;
  obj.style.MsFilter = "progid: DXImageTransform.Microsoft.Alpha(opacity=" + (level * 100) + ");";
  obj.style.filter = "alpha(opacity=" + (level * 100) + ");";
}