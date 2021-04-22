let arr=['./back-img.jpg','https://images.unsplash.com/photo-1588702547981-5f8fed370e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80','https://images.unsplash.com/photo-1618333725938-77edb6c798e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80','https://images.unsplash.com/photo-1566978862346-73282aa378a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80']
let x=0

let rig=document.getElementById('right');

rig.addEventListener('click',()=>{

    if(x<arr.length-1){
        x++;
    }
    else{
        x=0;
    }
  

document.slide.src=arr[x]
    

})
let left=document.getElementById('left');
left.addEventListener('click',()=>{
    if(x==0)
    {
        x=arr.length-1;
    }
    else{
        x--;
    }
document.slide.src=arr[x]

})
setInterval(() => {
    if(x<arr.length-1){
        x++
    }
    else{
        x=0;
    }
    document.slide.src=arr[x];
    
}, 3000);


