bgm1 = document.getElementById('bgm1')
window.addEventListener('load',function(){
    bgm1.play()
})


let entryPopup = document.getElementById('entryPopup');
let startButton = document.getElementById('startButton');

// 当用户点击 "开始" 按钮时
startButton.addEventListener('click', function() {
    entryPopup.style.display = 'none'; // 隐藏弹窗
});

// 在页面加载时显示弹窗
window.onload = function() {
    entryPopup.style.display = 'block';
};


