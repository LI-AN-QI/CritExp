bgm6 = document.getElementById('bgm6')
window.addEventListener('load',function(){
    bgm6.play()
})



let risk8_scroll = document.getElementById('risk8_scroll')

window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            risk8_scroll.classList.add("hidden");
        }else{
            risk8_scroll.classList.remove("hidden");
        }
    })