
let musicballoon = this.document.getElementById('musicballoon');
window.addEventListener('load',function(){
    document.documentElement.scrollTop=document.documentElement.scrollHeight
})
console.log(document.documentElement.scrollHeight);
console.log(scrollY);





document.addEventListener('DOMContentLoaded',function(){
    let releasebtn = document.getElementById('releasebtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY < 5880) { // 滚动距离小于5880时隐藏按钮
            releasebtn.classList.add("hidden");
        } else {
            releasebtn.classList.remove("hidden");
        }
    });

    let balloon = document.getElementById('musicballoon');
    window.addEventListener('scroll',()=>{
        if (window.scrollY < 1200) { // 滚动距离小于2116px时隐藏气球
            balloon.classList.add("hidden");
        } else {
            balloon.classList.remove("hidden");
        }
    })



})

