let Boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector(".resetbtn");
let NewGame = document.querySelector(".NewGame");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let turn0 = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.disabled) {
            if (turn0) {
                box.innerHTML = "<span class='x'>X</span>";
                turn0 = false;
            } else {
                box.innerHTML = "<span class='o'>O</span>";
                turn0 = true;
            }
            box.disabled = true;
            checkwin();
        }
    });
});

const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const disableboxes = () => {
    for (let box of Boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of Boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwin = () => {
    for (let pattern of winPattern) {
        let positionvalue = Boxes[pattern[0]].innerText;
        let position1value = Boxes[pattern[1]].innerText;
        let position2value = Boxes[pattern[2]].innerText;

        if (positionvalue !== "" && position1value !== "" && position2value !== "") {
            if (positionvalue === position1value && position1value === position2value) {
                console.log("win");
                showWinner(positionvalue);
            }
        }
    }
};

NewGame.addEventListener("click", resetgame);
Resetbtn.addEventListener("click", resetgame);

