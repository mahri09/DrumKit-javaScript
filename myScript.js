let drumsAll = document.querySelectorAll(".drum");
let drumBtn1 = document.querySelectorAll(".w");

drumBtn1.onclick = () => {
  new Audio("sounds/tom-1.mp3").play();
};

for(let i=0; i<drumsAll.length; i++){
  drumsAll[i].addEventListener('click', (e)=>{
    console.log( drumsAll[i].value);
    new Audio("sounds/"+drumsAll[i].value+".mp3").play();
    const className = e.target.classList[0];
    const activeButton = document.querySelector('.' + className)
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
})
}

document.addEventListener('keypress', (e)=>{
  console.log(e.key)
  new Audio("sounds/tom-" + e.key + ".mp3").play();
  const activeButton = document.querySelector('.' + e.key)
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
})