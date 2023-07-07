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
            window.alert("game over!")
        }
    },10)
  
}
document.addEventListener("keypress",(event)=>{
    jump()
})
