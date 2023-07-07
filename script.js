const you  = document.getElementById("you");
const obj = document.getElementById("obj");
const b = document.getElementById("body")

function jump(){
    
    if(you.classList != "jump"){
        you.classList.add("jump")
        setTimeout(()=>{
            you.classList.remove("jump")
        },600)
    }
   
    obj.style.display = "block"
    if(run = true){
        obj.classList.add("run")
      
    }
    else{
        obj.classList.remove("run")
    }
   
  
}

    document.addEventListener("keypress",(event)=>{
        jump()
        run = setInterval(()=>{
            let youTop = parseInt(window.getComputedStyle(you).getPropertyValue("top"))
            let objEnd = parseInt(window.getComputedStyle(obj).getPropertyValue("left"))
            if(objEnd < 40 && objEnd >0 && youTop>430){
        
                alert("Game Over")
    
            }
            
        },10)
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