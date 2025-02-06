gsap.from('.header',{
    opacity:0,
    y:-60,
    delay:0.5,
    duration:0.5,
})
gsap.from('.header h2',{
    y:-65,
    delay:1,
    duration:0.5,
})
gsap.from('.header .links a',{
    y:-65,
    delay:1.5,
    duration:0.5,
    stagger:0.6
})
gsap.from('.header .links button',{
    y:-75,
    delay:4.9,
    duration:0.5,
})



var textArray =['Software Engineer','Web-Developer','Web - Designer','Engineer']
var imp = document.querySelector('.container .information .info')
var index = 0
setInterval(()=>{
    if(index>3){
        index=0
    }
    imp.innerHTML=textArray[index]
    index=index+1
},4500)

var tl2=gsap.timeline()
tl2.from('.container .img',{
    opacity:0,
    x:1800,
    duration:1.5,
    Delay:1,
    scrollTrigger:{
    trigger:'.container .img',
    scroller:'body',
    start:'top 80%',
    end:'top 30%',
    scrub:4,
    }
})

var tl3=gsap.timeline()
tl3.from('.container .information',{
    opacity:0,
    x:-1800,
    duration:1.5,
    Delay:1,
    scrollTrigger:{
    trigger:'.container .information',
    scroller:'body',
    start:'top 80%',
    end:'top 30%',
    scrub:4,
    }
})







  