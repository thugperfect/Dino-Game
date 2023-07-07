const you  = document.getElementById("you");
const obj = document.getElementById("obj")

function jump(){
    if(you.classList != "jump"){
        you.classList.add("jump")
        setTimeout(()=>{
            you.classList.remove("jump")
        },500)
    }
    if(obj.classList != "run"){
        obj.classList.add("run")
      
    }
    let run = setInterval(()=>{
        let youTop = parseInt(window.getComputedStyle(you).getPropertyValue("top"))
        let objEnd = parseInt(window.getComputedStyle(obj).getPropertyValue("left"))
        if(objEnd < 30 && objEnd >0 && youTop>430){
         alert("game over")  
        }
    },10)
  
}

document.addEventListener("keypress",(event)=>{
    jump()
})

function game(f){
    let btn = document.getElementById("start")
    let body = document.getElementById("mbody")
    btn.addEventListener("click",()=>{
        if(f === 0){
            btn.innerHTML="||"
        
            body.setAttribute("onclick","game(1)")

        }
        else{
            btn.innerHTML= ">"
            document.removeEventListener("keypress",(event)=>{
                jump()
            })
            body.setAttribute("onclick","game(0)")
        }
    })
}