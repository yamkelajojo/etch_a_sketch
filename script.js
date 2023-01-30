let color = "black";
let gridSize= document.querySelector('#sizeSlider');
let sliderNumber = document.querySelector("label")
const colorPicker = document.getElementById('colorPicker')

colorPicker.oninput = (e) => changeColor(e.target.value)


function populateBoard(size){
    let board = document.querySelector(".board");

    //clear out any existing divs if sezikhona so when it creates new set starts on a clean slate//
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    // 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //1fr means each colum will be 1/16th of container
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    

    amount = size * size
    for(let i = 0; i < amount; i++){ //if more than 16 x 16 then ezinye azizuvele(prolly cause aint enough space)
        let square = document.createElement("div");
        //Notice how we didn't add parentheses when calling the function cause "Attributes and properties do not require parentheses. Functions and methods require parentheses". ptolly why we said "this in function and didnt add parameter"
        square.addEventListener("mouseover", colorSquare);
        // 
        square.style.backgroundColor = "#fefefe"
        board.insertAdjacentElement("beforeend", square) // even yourself tried board.append(square) and it didnt make a difference
    };
};

populateBoard(16);

gridSize.addEventListener('input', function (e) {
    squareSize = e.target.value;
    populateBoard(squareSize);
    sliderNumber.textContent = `${squareSize} x ${squareSize}`;
  });




let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeSize(input){
    if(input >= 2 && input <= 100){
     populateBoard(input)   
    }
    else{
        console.log("too many squares")
    }   
};

function colorSquare() {
    if(mouseDown){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else{
            this.style.backgroundColor = color;
        }
    }    
};

buttons  = document.querySelectorAll(".cofa");

function changeColor(choice, element){
    color = choice;

    buttons.forEach(function(btn){
    btn.style.backgroundColor = "#ededed";
    btn.style.color = "#333";
    })

    element.style.backgroundColor = "#333";
    element.style.color = "#ededed"
};

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "#fefefe");
};