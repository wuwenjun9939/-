function reload(){
    location.reload();
};

function updateCopyrightYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
};

document.getElementById('reload').addEventListener('click',reload)
window.onload = updateCopyrightYear; // 当页面加载完毕时更新版权年份