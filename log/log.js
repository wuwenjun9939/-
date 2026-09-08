function reload(){
    location.reload();
};

document.getElementById('log-file-link').addEventListener('click', function (event) {
    event.preventDefault();
    var date = new Date();
    var year = date.getFullYear().toString().slice(-2); // 取后两位年份 
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var logFile = `./w3svc1/u_ex${year}${month}${day}.log`;
    document.getElementById('log-frame').srcdoc = `<iframe src="${logFile}" style="width:100%;height:100%;border:none;"></iframe>`;
});
document.getElementById('reload').addEventListener('click',reload)