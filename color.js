const colors = [
    { name: "黑色", value: "#000000" },
    { name: "白色", value: "#FFFFFF" },
    { name: "红色", value: "#FF0000" },
    { name: "绿色", value: "#00FF00" },
    { name: "蓝色", value: "#0000FF" },
    { name: "黄色", value: "#FFFF00" }
];
let index = 0;
let hideTimer;
function updateScreen() {
    document.body.style.backgroundColor = colors[index].value;
    document.title =
        "显示器测试 - " + colors[index].name;
    document.getElementById("info").textContent =
        colors[index].name +
        "（任意键切换 / F全屏）";
}
function nextColor() {
    index = (index + 1) % colors.length;
    updateScreen();
}
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
        .catch(()=>{});
    } else {
        document.exitFullscreen();
    }
}
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
        return;
    }
    nextColor();
});
function showCursor() {
    document.body.style.cursor = "default";
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
        document.body.style.cursor = "none";
    }, 3000);
}
document.addEventListener("mousemove", showCursor);
document.addEventListener("mousedown", showCursor);
updateScreen();
showCursor();
