const you  = document.getElementById("you");
const obj = document.getElementById("obj")

function jump(){
    if(you.classList != "jump"){
        you.classList.add("jump")
        setTimeout(()=>{
            you.classList.remove("jump")
        },500)
    }
    let run = setInterval(()=>{
        let youTop = parseInt(window.getComputedStyle(you).getPropertyValue("top"))
        let objEnd = parseInt(window.getComputedStyle(obj).getPropertyValue("left"))
        if(objEnd < 30 && objEnd >0 && youTop>430){
           
        }
    },10)
  
}



function game(f){
    let btn = document.getElementById("start")
    let body = document.getElementById("mbody")
    btn.addEventListener("click",()=>{
        if(f === 0){
            btn.innerHTML="||"
            document.addEventListener("keypress",(event)=>{
                jump()
            })
            body.setAttribute("onclick","game(1)")

        }
        else{
            btn.innerHTML= ">"
            body.setAttribute("onclick","game(0)")
        }
    })
}