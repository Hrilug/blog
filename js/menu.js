function detect() {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        document.getElementById("box").style.width = "0";
        return false; // 移动端
    } else {
        return true; // PC端
    }
}

function init() {
    console.log("hello");
    $("#menu-button").hide();
    if (detect()) {
        console.log("this is a PC");
    }
    else {
        console.log("this is a mobile device");
        document.getElementById("box").style.display = "hidden";
        $("#menu-button").show();
        $(".cpp a div").css({"margin":"10px","width":"130px","height":"130px"});
        $(".cpp a div img").css({"width":"100px","height":"100px"});
    }
}

window.onload = init();

function menu_show(){
    $("#box").animate({width:"45%"},200);
}

function menu_hide(){
    if (detect()) {
    }
    else{
    $("#box").animate({width:"0"},200);
    }
}