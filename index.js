const myBoxes = document.getElementsByClassName('box')
for(let b = 0; b < myBoxes.length; b++){
    myBoxes[b].style.background = 'url(https://source.unsplash.com/random/200x200/?sig=' + b + ')';
    myBoxes[b].style.backgroudSize = 'cover,contain'
}

setInterval(()=>{
// for(let i = 0 ; i < myBoxes.length; i++){
//     let currentBox = myBoxes[i]
    let randomBox = Math.floor(Math.random()*(myBoxes.length - 1))
    // myBoxes[randomBox].style.background = 'url(https://source.unsplash.com/random/200x200)';

    let left = Number(myBoxes[randomBox].style.left.split('px')[0]);
    let top = Number(myBoxes[randomBox].style.top.split('px')[0]);
    let boxStyle = window.getComputedStyle(myBoxes[randomBox])
    // let left = boxStyle.left
    // let top = boxStyle.top
    let width = boxStyle.width;
    let height = boxStyle.height;
    height = Number(height.split('px')[0])
    width = Number(width.split('px')[0])
    let midX = window.innerWidth / 2;
    let midY = window.innerHeight / 2;

    let translateXAmount = 0,translateYAmount = 0
    // translateXAmount = midX - (left - (width / 2));
    // translateYAmount = midY - (top - (height / 2));
    
    myBoxes[randomBox].style.position = 'absolute'
    myBoxes[randomBox].style.width = width
    myBoxes[randomBox].style.height = height
    myBoxes[randomBox].style.zIndex = 1000

    myBoxes[randomBox].style.transform = 'translateZ(300px)'

    setTimeout(()=>{
        myBoxes[randomBox].style.transform = `translateZ(800px) scale(2)`;
        setTimeout(()=>{
            myBoxes[randomBox].style.transform = "translateZ(0px)";
            myBoxes[randomBox].style.position = 'relative'
            myBoxes[randomBox].style.zIndex = 0
            setTimeout(()=>{
                myBoxes[randomBox].style.transform = 'rotateY(0deg) scale(1)' 
            },1000)
        },5000)
    },1000)

    
    // myBoxes[randomBox].classList.add('spinning-box')
    // setTimeout(()=>{
    //     myBoxes[randomBox].classList.remove('spinning-box')
    // },12000)
// }
},6000)

