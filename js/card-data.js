const play = document.querySelector("#play");
const hit = document.querySelector("#hit");
const stand = document.querySelector("#stand");
const player = document.querySelector("#player");
const dealer = document.querySelector("#dealer");
const playerNum = document.querySelector("#playerNum");
const dealerNum = document.querySelector("#dealerNum");
const game = document.querySelector("#game");
const title = document.querySelector("#title");
const again = document.querySelector("#again")

const deck = [
    //hearts
    {
        name: '♥2',
        value: 2,
        color: 'red'
    },
    {
        name: '♥3',
        value: 3,
        color: 'red'
    },
    {
        name: '♥4',
        value: 4,
        color: 'red'
    },
    {
        name: '♥5',
        value: 5,
        color: 'red'
    },
    {
        name: '♥6',
        value: 6,
        color: 'red'
    },
    {
        name: '♥7',
        value: 7,
        color: 'red'
    },
    {
        name: '♥8',
        value: 8,
        color: 'red'
    },
    {
        name: '♥9',
        value: 8,
        color: 'red'
    },
    {
        name: '♥10',
        value: 10,
        color: 'red'
    },
    {
        name: '♥J',
        value: 10,
        color: 'red'
    },
    {
        name: '♥Q',
        value: 10,
        color: 'red'
    },
    {
        name: '♥K',
        value: 10,
        color: 'red'
    },
    {
        name: '♥A',
        value: 11,
        color: 'red'
    },
    //Colvers
    {
        name: '♣️2',
        value: 2,
        color: 'black'
    },
    {
        name: '♣️3',
        value: 3,
        color: 'black'
    },
    {
        name: '♣️4',
        value: 4,
        color: 'black'
    },
    {
        name: '♣️5',
        value: 5,
        color: 'black'
    },
    {
        name: '♣️6',
        value: 6,
        color: 'black'
    },
    {
        name: '♣️7',
        value: 7,
        color: 'black'
    },
    {
        name: '♣️8',
        value: 8,
        color: 'black'
    },
    {
        name: '♣️9',
        value: 8,
        color: 'black'
    },
    {
        name: '♣️10',
        value: 10,
        color: 'black'
    },
    {
        name: '♣️J',
        value: 10,
        color: 'black'
    },
    {
        name: '♣️Q',
        value: 10,
        color: 'black'
    },
    {
        name: '♣️K',
        value: 10,
        color: 'black'
    },
    {
        name: '♣️A',
        value: 11,
        color: 'black'
    },
    //Diamonds 
    {
        name: '♦️2',
        value: 2,
        color: 'red'
    },
    {
        name: '♦️3',
        value: 3,
        color: 'red'
    },
    {
        name: '♦️4',
        value: 4,
        color: 'red'
    },
    {
        name: '♦️5',
        value: 5,
        color: 'red'
    },
    {
        name: '♦️6',
        value: 6,
        color: 'red'
    },
    {
        name: '♦️7',
        value: 7,
        color: 'red'
    },
    {
        name: '♦️8',
        value: 8,
        color: 'red'
    },
    {
        name: '♦️9',
        value: 8,
        color: 'red'
    },
    {
        name: '♦️10',
        value: 10,
        color: 'red'
    },
    {
        name: '♦️J',
        value: 10,
        color: 'red'
    },
    {
        name: '♦️Q',
        value: 10,
        color: 'red'
    },
    {
        name: '♦️K',
        value: 10,
        color: 'red'
    },
    {
        name: '♦️A',
        value: 11,
        color: 'red'
    },
    //Spades
    {
        name: '♠️2',
        value: 2,
        color: 'black'
    },
    {
        name: '♠️3',
        value: 3,
        color: 'black'
    },
    {
        name: '♠️4',
        value: 4,
        color: 'black'
    },
    {
        name: '♠️5',
        value: 5,
        color: 'black'
    },
    {
        name: '♠️6',
        value: 6,
        color: 'black'
    },
    {
        name: '♠️7',
        value: 7,
        color: 'black'
    },
    {
        name: '♠️8',
        value: 8,
        color: 'black'
    },
    {
        name: '♠️9',
        value: 8,
        color: 'black'
    },
    {
        name: '♠️10',
        value: 10,
        color: 'black'
    },
    {
        name: '♠️J',
        value: 10,
        color: 'black'
    },
    {
        name: '♠️Q',
        value: 10,
        color: 'black'
    },
    {
        name: '♠️K',
        value: 10,
        color: 'black'
    },
    {
        name: '♠️A',
        value: 11,
        color: 'black'
    },
]


const pCard1 = document.createElement('h1');
const pCard2 = document.createElement('h1');
const pCard3 = document.createElement('h1');
const pCard4 = document.createElement('h1');

const dCard1 = document.createElement('h1');
const dCard2 = document.createElement('h1');
const dCard3 = document.createElement('h1');
