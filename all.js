function music() {
    let meting_music_api = "https://api.mizore.cn/meting/api.php"; // meting api
    let music_server = "netease"; // 音乐服务：网易云 netease 参见 meting api支持的服务
    let music_type = "playlist"; // 歌曲类型：歌单playlist 单首歌曲 song  专辑 album
    let music_id = "20173709"; // 歌单ID或歌曲ID或者专辑ID 20173709 29732992
    let music_order = "random"; // 音频循环顺序, 顺序播放： 'list', 随机播放：'random'
    let music_mini = false; // mini模式 吸底模式开启后此选项实效 true / false
    let music_fixed = false; // 吸底模式
    let music_volume = 50; // 默认音量
    let music_autoplay = true; // 自动播放
    let music_loop = "all"; // 音频循环播放, 可选值: 'all', 'one', 'none' ，分别为全部循环，单曲循环，不循环
};

var wallpapers = [
    'https://t.mwm.moe/pc',
    './image/1.jpg',
    './image/1.png',
    './image/2.jpg',
    './image/2.png',
    './image/3.jpg',
    './image/3.png',
    './image/4.jpg',
    './image/4.png',
    './image/5.jpg',
    './image/5.png',
    './image/6.png',
    './image/7.png',
    './image/8.png',
    './image/9.png',
    './image/10.png',
    './image/11.png'
];

var currentWallpaperIndex = 0;

function setWallpaper() {
    var wallpaperUrl = wallpapers[currentWallpaperIndex];
    document.body.style.backgroundImage = `url(${wallpaperUrl})`;
};

function toggleWallpaper() {
    currentWallpaperIndex++;
    if (currentWallpaperIndex >= wallpapers.length) {
        currentWallpaperIndex = 0;
    }
    setWallpaper();
};

setWallpaper();

function reload() {
    location.reload();
};

function updateCopyrightYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
};
window.onload = updateCopyrightYear; // 当页面加载完毕时更新版权年份

document.getElementById('toggle-wallpaper').addEventListener('click', toggleWallpaper);
document.getElementById('reload').addEventListener('click', reload)
document.getElementById('music').addEventListener('click', music)
document.getElementById('toggle-button').addEventListener('click', function() {
    document.getElementById('content').classList.toggle('dark-mode');
});
document.getElementById("qp").onclick = () => {
    document.documentElement.requestFullscreen();
};
