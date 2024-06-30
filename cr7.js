let ImageToBeChange = document.getElementById("imageTobeChange");
console.log(imageTobeChange)
ImageToBeChange.src = "https://www.w3schools.com/js/pic_bulboff.gif"

const OnBulb = ()=>{
  ImageToBeChange.src ="https://www.w3schools.com/js/pic_bulbon.gif"
}

const OffBulb = ()=>{
  ImageToBeChange.src ="https://www.w3schools.com/js/pic_bulboff.gif"
}
