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
        square.style.backgroundColor = "blue"
        board.insertAdjacentElement("beforeend", square)
    };
};

populateBoard(16);

function changeSize(input){
    if(input >= 2 && input <= 100){
     populateBoard(input)   
    }
    else{
        console.log("too many squares")
    }   
};

function colorSquare() {
    this.style.backgroundColor = "black";
}
