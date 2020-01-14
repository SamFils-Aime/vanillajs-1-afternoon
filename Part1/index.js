console.log("hey")

const board = []
function play (clickedId){
    var playerSpan = document.getElementById('player');
    var clickedElement = document.getElementById(clickedId);
    if( playerSpan.innerText === 'X')
    { playerSpan.innerText = 'O';  
      clickedElement.innerText = 'X';
      board[clickedId] = 'X'}

    else {playerSpan.innerText = 'X'
    clickedElement.innerText = 'O';   
    board[clickedId]= 'O'} 



const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];



 if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    return alert(" you won :)")}

 if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    return alert("killing it!!!")}

 if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    return alert("damn")}

 if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    return alert("you got wrecked")}

 if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    return alert("$hope you didn't bet money")}

  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    return alert("winner")}

  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
   return alert("$lottery number are 90000 because thats how much he beat you")}

  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    return alert("just quit")}

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Owo gotta go again");
  }
}
