const you  = document.getElementById("you");

function jump(){
    if(you.classList != "jump"){
        you.classList.add("jump")
        setTimeout(()=>{
            you.classList.remove("jump")
        },400)
    }
  
}
document.addEventListener("keypress",(event)=>{
    jump()
})
