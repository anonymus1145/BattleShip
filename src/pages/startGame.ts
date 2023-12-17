// Modal to ask user if they want to start a new game
export function startGame() {
    const body = document.querySelector('body');

    let modal = document.createElement('modal');
    modal.setAttribute('id', 'startGame');

    let modalContent = document.createElement('div');
    modalContent.classList.add("fixed", "left-0", "top-0", "flex", "h-full", "w-full", "items-center", "justify-center", "bg-black", "bg-opacity-50", "py-10");
    modal.appendChild(modalContent);

    let modalContent2 = document.createElement('div');
    modalContent2.classList.add('max-h-full', 'w-full', 'max-w-xl', 'overflow-y-auto', 'sm:rounded-2xl', 'bg-white');
    modalContent.appendChild(modalContent2);

    let modalContent3 = document.createElement('div');
    modalContent3.classList.add('w-full');
    modalContent2.appendChild(modalContent3);

    let modalContent4 = document.createElement('div');
    modalContent4.classList.add('m-8', 'my-20', 'max-w-[400px]', 'mx-auto');
    modalContent3.appendChild(modalContent4);

    let modalContent5 = document.createElement('div');
    modalContent5.classList.add('mb-8', 'text-center');
    modalContent4.appendChild(modalContent5);

    let titleH1 = document.createElement('h1');
    titleH1.classList.add('mb-4', 'text-3xl', 'font-extrabold');
    titleH1.textContent = 'BattleShip Game';
    modalContent5.appendChild(titleH1);

    let descriptionP = document.createElement('p');
    descriptionP.classList.add('text-gray-600');
    descriptionP.textContent = 'Embark on an epic naval adventure, a thrilling Battleship game that pits you against an intelligent opponent in a strategic battle for naval supremacy.';
    modalContent5.appendChild(descriptionP);

    let modalContent6 = document.createElement('div');
    modalContent6.classList.add('space-y-4');
    modalContent4.appendChild(modalContent6);

    let startButton = document.createElement('button');
    startButton.classList.add('p-3', 'bg-black', 'rounded-full', 'text-white', 'w-full', 'font-semibold');
    startButton.textContent = 'Start Game';
    startButton.addEventListener('click', onclick);
    modalContent6.appendChild(startButton);

    body?.appendChild(modal);
}

function onclick() {
    // TODO: start game
    console.log('start game');
}