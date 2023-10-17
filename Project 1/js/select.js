let bln1 = document.getElementById('bln1');
let bln2 = document.getElementById('bln2');
let bln3 = document.getElementById('bln3');
let bln1_des = document.getElementById('bln1_des');
let bln2_des = document.getElementById('bln2_des');
let bln3_des = document.getElementById('bln3_des');


let isImageEnlarged = false;
console.log(window.innerHeight)
//-------------------------------------------------------------
bgm2 = document.getElementById('bgm2')
window.addEventListener('load',function(){
    bgm2.play()
})
// -------------------------------------------------------------
bln1.addEventListener('mouseover',function(){
    if(!isImageEnlarged){
        bln1.style.transform = 'scale(1.2)';
        bln2.style.transform = 'scale(1)';
        bln3.style.transform = 'scale(1)';
        bln1_des.style.opacity=1;
    }   
});

bln2.addEventListener('mouseover',function(){
    if(!isImageEnlarged){
        bln2.style.transform = 'scale(1.2)';
        bln1.style.transform = 'scale(1)';
        bln3.style.transform = 'scale(1)';
        bln2_des.style.opacity=1;
    }   
});

bln3.addEventListener('mouseover',function(){
    if(!isImageEnlarged){
        bln3.style.transform = 'scale(1.2)';
        bln1.style.transform = 'scale(1)';
        bln2.style.transform = 'scale(1)';
        bln3_des.style.opacity=1;
    }   
});
///////////////////////////





bln1.addEventListener('mouseout',function(){
    bln1_des.style.opacity=0;
    if(!isImageEnlarged){
        bln1.style.transform = 'scale(1)';
    }
});
bln2.addEventListener('mouseout',function(){
    bln2_des.style.opacity=0;
    if(!isImageEnlarged){
        bln2.style.transform = 'scale(1)';
    }
});
bln3.addEventListener('mouseout',function(){
    bln3_des.style.opacity=0;
    if(!isImageEnlarged){
        bln3.style.transform = 'scale(1)';
    }
});


////////////////////////
bln1.addEventListener('click',function(){
    if(isImageEnlarged){
        bln1.style.transform = 'scale(1)';
        isImageEnlarged = false;
    }else{
        bln1.style.transform = 'scale(1.2)';
        bln2.style.transform = 'scale(1)';
        bln3.style.transform = 'scale(1)';
        isImageEnlarged = true;
    }

})

bln2.addEventListener('click',function(){
    if(isImageEnlarged){
        bln2.style.transform = 'scale(1)';
        isImageEnlarged = false;
    }else{
        bln2.style.transform = 'scale(1.2)';
        bln1.style.transform = 'scale(1)';
        bln3.style.transform = 'scale(1)';
        isImageEnlarged = true;
    }

})

bln3.addEventListener('click',function(){
    if(isImageEnlarged){
        bln3.style.transform = 'scale(1)';
        isImageEnlarged = false;
    }else{
        bln3.style.transform = 'scale(1.2)';
        bln2.style.transform = 'scale(1)';
        bln1.style.transform = 'scale(1)';
        isImageEnlarged = true;
    }

})






//-------------------------------SCROLL EVENT-----------------------------------------------------//

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click',function(){
    window.scrollTo({
            top:830,
            behavior:'smooth'
    })
})


let btn3 = document.getElementById('btn3');
btn3.addEventListener('click',function(){
    window.scrollTo({
            top:1600,
            behavior:'smooth'
    })
})

