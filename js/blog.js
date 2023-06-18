function detect() {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        document.getElementById("box").style.width = "80%";
        return false; // 移动端
    } else {
        return true; // PC端
    }
}


function init() {
    console.log("hello");
    if (detect()) {
        console.log("this is a PC");
    }
    else {
        console.log("this is a mobile device");
        //document.getElementById("box").style.display = "hidden";
        document.getElementById("box").style.display = "none";
        document.getElementById("menu-button").style.display = "block";
    }
}

window.onload = init();

function menu_show() {
    document.getElementById("box").style.display = "block";

}

function menu_back() {
    if (detect()) {
        console.log(device);
    }
    else {
        document.getElementById("box").style.display = "none";
    }
}