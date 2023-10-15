let risk7_scroll = document.getElementById('risk7_scroll')

window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            risk7_scroll.classList.add("hidden");
        }else{
            risk7_scroll.classList.remove("hidden");
        }
    })
    

    bgm4 = document.getElementById('bgm4')
window.addEventListener('load',function(){
    bgm4.play()
})
    
