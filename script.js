// script.js

// Funktio pelin avaamiseen
function openGame(game) {
    const gameModal = document.getElementById('gameModal');
    const gameContainer = document.getElementById('gameContainer');

    // Tyhjennä aiempi peli
    gameContainer.innerHTML = '';

    // Määritä pelin URL pelin nimen perusteella
    let gameUrl = '';
    switch (game) {
        case 'flappybird':
            gameUrl = 'https://flappybird.io/';
            break;
        case 'tetris':
            gameUrl = 'https://tetris.com/play-tetris';
            break;
        case 'pacman':
            gameUrl = 'https://www.pacman.com/';
            break;
        case 'snake':
            gameUrl = 'https://playsnake.org/';
            break;
        case 'pong':
            gameUrl = 'https://www.ponggame.org/';
            break;
        case 'asteroids':
            gameUrl = 'https://www.atarigames.com/asteroids/';
            break;
        case 'spaceinvaders':
            gameUrl = 'https://www.spaceinvadersgame.org/';
            break;
        case 'bubble':
            gameUrl = 'https://www.bubbleshooter.net/';
            break;
        case '2048':
            gameUrl = 'https://2048game.com/';
            break;
        case 'angrybirds':
            gameUrl = 'https://www.angrybirdsgame.com/';
            break;
        default:
            alert('Peli ei löytynyt');
            return;
    }

    // Luo iframe peliä varten
    const iframe = document.createElement('iframe');
    iframe.src = gameUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    gameContainer.appendChild(iframe);

    // Näytä modaalinen ikkuna
    gameModal.style.display = 'flex';
}

// Funktio pelin sulkemiseen
function closeModal() {
    const gameModal = document.getElementById('gameModal');
    gameModal.style.display = 'none';
    document.getElementById('gameContainer').innerHTML = ''; // Tyhjennä peli
}

// Lisää tapahtumankuuntelijat pelin avaamiselle
document.addEventListener('DOMContentLoaded', () => {
    // Esimerkki: Lisää tapahtumankuuntelijat pelinapeille
    const gameButtons = document.querySelectorAll('.game-button'); // Olettaen, että pelinapit ovat luokassa "game-button"
    gameButtons.forEach(button => {
        button.addEventListener('click', () => {
            const game = button.getAttribute('data-game'); // Olettaen, että pelin nimi on data-attribuutissa
            openGame(game);
        });
    });
});
