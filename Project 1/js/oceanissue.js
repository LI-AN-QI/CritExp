let oceanissue_continue = document.getElementById('oceanissue_continue');


oceanissue_continue.addEventListener('click',function(){
    window.scrollTo({
            top:1000,
            behavior:'smooth'
    })
})




let scrolltocontinue = document.getElementById('scrolltocontinue')
console.log(scrollY)
window.addEventListener('scroll',()=>{
        if(window.scrollY>1100){
            scrolltocontinue.classList.add("hidden");
        }else{
            scrolltocontinue.classList.remove("hidden");
        }
    })



    bgm5 = document.getElementById('bgm5')
window.addEventListener('load',function(){
    bgm5.play()
})
    
