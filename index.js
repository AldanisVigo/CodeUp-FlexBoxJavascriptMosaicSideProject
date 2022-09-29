const myBoxes = document.getElementsByClassName('box')
for(let b = 0; b < myBoxes.length; b++){
    myBoxes[b].style.background = 'url(https://source.unsplash.com/random/200x200/?sig=' + b + ')'
    myBoxes[b].style.backgroudSize = 'cover,contain'
}

setInterval(()=>{
    let randomBox = Math.floor(Math.random()*(myBoxes.length - 1))
    let boxStyle = window.getComputedStyle(myBoxes[randomBox])
    let width = boxStyle.width
    let height = boxStyle.height
    height = Number(height.split('px')[0])
    width = Number(width.split('px')[0])
    myBoxes[randomBox].style.position = 'absolute'
    myBoxes[randomBox].style.width = width
    myBoxes[randomBox].style.height = height
    myBoxes[randomBox].style.zIndex = 1000
    myBoxes[randomBox].style.transform = 'translateZ(300px)'
    setTimeout(()=>{
        myBoxes[randomBox].style.transform = `translateZ(800px) scale(2)`
        setTimeout(()=>{
            myBoxes[randomBox].style.transform = "translateZ(0px)"
            myBoxes[randomBox].style.position = 'relative'
            myBoxes[randomBox].style.zIndex = 0
            setTimeout(()=>{
                myBoxes[randomBox].style.transform = 'rotateY(0deg) scale(1)' 
            },1000)
        },5000)
    },1000)
},6000)

