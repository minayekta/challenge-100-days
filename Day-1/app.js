const data = {
    boxes: document.querySelectorAll('#boxes div'),
    mainScreen: document.querySelector('html')
}

const handleClick = (e) =>{
    data.mainScreen.style.backgroundColor = e.target.style.backgroundColor;
}
const screenColor = () =>{
    data.boxes.forEach((box)=>
    box.addEventListener("click", handleClick)
    )
}

window.addEventListener("load", ()=>{
    screenColor();
})