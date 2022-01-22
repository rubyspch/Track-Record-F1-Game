const trackInfo = [
    {
        name:"Monza",
        firstWinner: "John Doe",
        lastWinner: "Jane Doe",
        yearsActive:[2021,2020,2019,2018],
        picture:"/Track_Photos/MonzaPhoto.png"
    },
    {
        name:"Monza2",
        firstWinner: "John Doe2",
        lastWinner: "Jane Doe2",
        yearsActive:[2021,2020,2019,2018],
        picture:"/Track_Photos/MonzaPhoto.png"
    },
    {
        name:"Monza3",
        firstWinner: "John Doe3",
        lastWinner: "Jane Doe3",
        yearsActive:[2021,2020,2019,2018],
        picture:"/Track_Photos/MonzaPhoto.png"
    },
    {
        name:"Monaco",
        firstWinner: "Monty Carlo",
        lastWinner: "Monica Carlo",
        yearsActive:[2021,2020,2019,2018, 2017, 2014],
        picture:"/Track_Photos/MonacoPhoto.png"
    },
    {
        name:"Monaco2",
        firstWinner: "Monty Carlo2",
        lastWinner: "Monica Carlo2",
        yearsActive:[2021,2020,2019,2018, 2017, 2015],
        picture:"/Track_Photos/MonacoPhoto.png"
    },
    {
        name:"Monaco3",
        firstWinner: "Monty Carlo3",
        lastWinner: "Monica Carlo3",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/MonacoPhoto.png"
    }
]

//Page navigation hiding and showing
const startPage=document.querySelector('.start');
const setupPage=document.querySelector('.setup');
const playPage=document.querySelector('.play');
const resultPage=document.querySelector('.result');

//.start to .setup transition
const beginSetupButton=document.querySelector('button#begin-setup');

beginSetupButton.addEventListener('click', function(){
    setupPage.style.display = "block";
    startPage.style.display = "none";
})

//.result to .setup transition
const restartButton=document.querySelector('button#play-again');

restartButton.addEventListener('click', function(){
    setupPage.style.display = "block";
    resultPage.style.display = "none";
})

const numOfTracks=trackInfo.length;

const beginGameButton = document.querySelector('button#start-game-button');

beginGameButton.addEventListener('click', setupGame);

const image = document.querySelector('img#track-photo');

//Grab option buttons and add click listener to them
const selectedOptions = [document.querySelector('button#option-1'), document.querySelector('button#option-2'), document.querySelector('button#option-3')];
// selectedOptions.forEach(element => {
//     element.addEventListener('click', checked);
// });
for(let i=0; i<selectedOptions.length;i++){
    selectedOptions[i].addEventListener('click', checked);
};

// Set base question tracker and score
let roundAnswer=[];
let userScore = 0;

// Grab next and see result buttons for end of round
const seeResultButton = document.querySelector('button#see-result');
const nextButton = document.querySelector('button#next');
const scoreText = document.querySelector('h1#score');
const scoreResponse = document.querySelector('h2#score-response');

seeResultButton.addEventListener('click', endGame);
nextButton.addEventListener('click', setupGame);

function setupGame(){
    if (roundAnswer.length == 5){ //hide/show the buttons on last round
        seeResultButton.style.display = "block";
        nextButton.style.display = "none";
    } else if (roundAnswer.length==0){ //hiding .setup and showing .play on start of round
        playPage.style.display = "block";
        setupPage.style.display = "none";
    }

    let randomNum;
    do{ // Get new random number if the current one has already been used. PROBS NOT THE MOST EFFICIENT METHOD.
        randomNum=Math.floor((Math.random() * numOfTracks));
    } while (roundAnswer.indexOf(trackInfo[randomNum].name)>-1);

    //Append the selected track's details to the page
    appendText(document.querySelector('span#track-first-winner'),trackInfo[randomNum].firstWinner);
    appendText(document.querySelector('span#track-last-winner'),trackInfo[randomNum].lastWinner);
    appendText(document.querySelector('span#track-years-active'),trackInfo[randomNum].yearsActive);

    image.src = trackInfo[randomNum].picture;

    //Get random options and shuffle them with answer
    let options = getOptions(trackInfo[randomNum].name);
    options = shuffleOptions(options);

    //Add options to HTML
    for(let i=0; i<options.length;i++){
        selectedOptions[i].textContent=options[i];
    }
    
}

function appendText(element, content){
    element.textContent = content;
}

function getOptions(answer){
    let optionA;
    let optionB;
    do{
        optionA=trackInfo[Math.floor((Math.random() * numOfTracks))].name;
    } while (optionA==answer);
    
    do{
        optionB=trackInfo[Math.floor((Math.random() * numOfTracks))].name;
    } while (optionB==answer);
    
    roundAnswer.push(answer);
    console.log("answersArray =" + roundAnswer);

    return [answer, optionA, optionB];
}

function shuffleOptions(array){
    //The Durstenfeld shuffle - an optimized version of Fisher-Yates
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function checked(){
    let userGuess = event.target;
    let currentAnswerIndex = roundAnswer.length - 1;
    if(userGuess.textContent == roundAnswer[currentAnswerIndex]){
        userGuess.style.backgroundColor = "green";
        userScore++;
        console.log("correct! Current Score: " + userScore);
    } else{
        userGuess.style.backgroundColor = "red";
        console.log("incorrect!  Current Score: " + userScore);
    }
}

function endGame(){

    scoreText.textContent = userScore + "/10";

    scoreResponse.textContent = scoreCategory(userScore);

    seeResultButton.style.display = "none";
    nextButton.style.display = "block";

    playPage.style.display = "none";
    resultPage.style.display = "block";

    userScore = 0;
    roundAnswer=[];
}
function scoreCategory(score){
    switch(score){
        case(10):
            return "Perfect score! Try upping the difficulty.";
        case(8||9):
            return "Nearly perfect, try again.";
        case(5||6||7):
            return "Solid score! Keep practicing.";
        case(3||4):
            return "You know a few, but do some more practice if you want to improve.";
        case(0||1||2):
            return "If at first you don't succeed, try try again.";
        default:
            return "Have another go if you think you can do better!"
    }
};