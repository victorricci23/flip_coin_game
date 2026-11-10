const randomButton = document.getElementById('button');
const randomImage = document.getElementById('coin');
const coinAreaText = document.querySelector('.coin-area');

function randommingCoinGame() {
    randomButton.addEventListener('click', (event) => {
        const result = Math.random() < 0.5 ? "Heads" : "Tails";
        console.log(randomImage.src)
        if (result === 'Heads') {
            if (!randomImage.src.endsWith('heads.svg')) {
                randomImage.src = 'resources/heads.svg';
                coinAreaText.lastElementChild.innerText = 'Head';

            }
        } else {
            if (!randomImage.src.endsWith('tails.svg')) {
                randomImage.src = 'resources/tails.svg';
                coinAreaText.lastElementChild.innerText = 'Tail';
            }
        }
    });
    return;
}


randommingCoinGame();