var light=document.querySelectorAll(".select>a")
var box1=document.querySelectorAll(".box1")
for(var i=0;i<light.length;i++){
    light[i].index=i
    light[i].onclick=function(){
        for(var j=0;j<light.length;j++){
            light[j].className=""
            box1[j].style.display="none"
        }
        this.className="light"
         box1[this.index].style.display="block"
    }
}