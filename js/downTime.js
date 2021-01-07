var h1=document.querySelector('.h1')
var h2=document.querySelector('.h2')
var m1=document.querySelector('.m1')
var m2=document.querySelector('.m2')
var s1=document.querySelector('.s1')
var s2=document.querySelector('.s2')
conntDown()
setInterval(conntDown,1000)
function conntDown(){
    var time1=new Date()
    var time2=new Date(2021,0,6)
    var times=(time2-time1)/1000
    if(times<=0){
        h1.innerHTML=0
        h2.innerHTML=0
        m1.innerHTML=0
        m1.innerHTML=0
        s1.innerHTML=0
        s1.innerHTML=0
    }
    var h=parseInt(times/60/60%24)
    if(h<10){
        h1.innerHTML=0
        h2.innerHTML=h
    }else{
        h1.innerHTML=parseInt(h/10)
        h2.innerHTML=h%10
    }
    var m=parseInt(times/60%60)
    if(m<10){
        m1.innerHTML=0
        m2.innerHTML=m
    }else{
        m1.innerHTML=parseInt(m/10)
        m2.innerHTML=m%10
    }
    var s=parseInt(times%60)
    if(s<10){
        s1.innerHTML=0
        s2.innerHTML=s
    }else{
        s1.innerHTML=parseInt(s/10)
        s2.innerHTML=s%10
    }
}
var topL=document.querySelector(".top")
topL.onclick=function(){
    if(document.body.scrollTop){
        document.body.scrollTop=0
    }else{
        document.documentElement.scrollTop=0
    }
}