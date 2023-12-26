export async function gameLayout() {
  console.log("gameLayout called");
  return new Promise<void>((resolve) => {
    let body = document.querySelector("body");

    const title = document.createElement("h1");
    title.style.fontFamily = "Pixelify Sans, Rubik Broken Fax";
    title.textContent = "BattleShip";
    title.classList.add(
      "text-5xl",
      "font-extrabold",
      "text-center",
      "mb-10",
      "mt-10"
    );
    body?.appendChild(title);

    let gameLayout = document.createElement("div");
    gameLayout.setAttribute("id", "gameLayout");
    gameLayout.classList.add("flex", "w-full", "h-full", "gap-10", "p-10");
    body?.appendChild(gameLayout);

    let playerBoard = document.createElement("div");
    playerBoard.setAttribute("id", "playerBoard");
    playerBoard.classList.add(
      "grid",
      "column-gap-0",
      "border-2",
      "border-black",
      "mx-auto",
      "my-auto"
    );
    createBoard(playerBoard);
    gameLayout.appendChild(playerBoard);

    let computerBoard = document.createElement("div");
    computerBoard.setAttribute("id", "computerBoard");
    computerBoard.classList.add(
      "grid",
      "column-gap-0",
      "border-2",
      "border-black",
      "mx-auto",
      "my-auto"
    );
    createBoard(computerBoard);
    gameLayout.appendChild(computerBoard);
    
    resolve();
  });
}

function createBoard(board: any) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let square = document.createElement("div");
      square.classList.add("w-10", "h-10", "border-2", "border-black");
      square.setAttribute("row", `${i}`);
      square.setAttribute("col", `${j}`);
      square.setAttribute("id", "square");
      square.innerHTML = "";
      board.appendChild(square);
    }
    board.style.gridTemplateColumns = "repeat(10, [col-start] 1fr [col-end])";
  }
}
