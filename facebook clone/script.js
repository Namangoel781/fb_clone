let setting = document.querySelector(".settings-menu");
let lightBtn = document.getElementById("light-btn");
function settingToggle(){
    setting.classList.toggle("settings-menu-open");
}
lightBtn.onclick = function(){
    lightBtn.classList.toggle("light-btn-on");
    document.body.classList.toggle("light-theme"); 
}