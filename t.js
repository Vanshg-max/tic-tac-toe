// winning pattern assume theri is 3 row and 3 coloum
/*winning patter:
horizontal:     -0,1,2
                -3,4,5
                6,7,8
verticle:       -0,3,6
                -1,4,7
               - 2,5,8
diagonal:       -0,4,8
               - 2,4,6

*/

let boxes =document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newbutton");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
// alternate input form user

// player x,y
let turnO= true; //player x







// 2d array
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]

];



const showWinner =(winner)=>{
    msg.innerText=`Congratulation ,winner is ${winner} `;
    msgcontainer.classList.remove("hide");
};



const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const disablebutton=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};







boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      
      checkWinner();
    
    
    });});


    const checkWinner =()=>{
        for ( let pattern of winPatterns){
        let pos1Val= boxes [pattern[0]].innerText;
        let pos2Val= boxes [pattern[1]].innerText;
        let pos3Val= boxes [pattern[2]].innerText;


        if (pos1Val !="" && pos2Val !="" &&pos3Val !=""){
            if (pos1Val === pos2Val && pos2Val ===pos3Val){
                console.log("winner",pos1Val);
                disablebutton();
                showWinner(pos1Val);
            }
        }
        }
    };


    newGameBtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);
 

