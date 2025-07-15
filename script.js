let textcolor = document.getElementById('flipcolor')
let wrap = document.getElementById('wrap')
let btn = document.getElementById('btn')
const hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click',funclick);

function funclick(){
    let hexcolor ='#'
    for(let i=0;i<6;i++){
        
       hexcolor+=randomHex()
    }
    wrap.style.backgroundColor=hexcolor;
    textcolor.innerHTML=hexcolor
}

function randomHex(){
    let randomhextext =Math.floor(Math.random()*16)
   return hex[randomhextext]
   
}
