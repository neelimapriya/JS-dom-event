// option -1: directly set on the HTML element
// <button oneclick="console.log(67)">another button</button>

// option-2 add onclick function on the HTML element
// important: we will use this
/* <button onclick="makeRed()">make red</button> */
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// option-3 
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}


// option-3 alternative
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option-4:
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option-4: another
const makeGreenButton=document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green'
})

// option-4: final
// important: We will use this sometime
document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor='goldenrod';
   })