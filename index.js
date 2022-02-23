//TODO
// Only allow user to attempt question once
//show the correct answer if user answers incorrectly
//Make it look pretty
// sort container heights
const trackInfo = [
    {
        name:"Bahrain International Circuit, Bahrain",
        firstWinner: " Michael Schumacher, 2004",
        lastWinner: "Lewis Hamilton, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2015],
        picture:"/Track_Photos/BahrainPhoto.png"
    },
    {
        name:"Autodromo Enzo e Dino Ferrari, Imola, Italy",
        firstWinner: "Nelson Piquet, 1980",
        lastWinner: "Max Verstappen, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2015],
        picture:"/Track_Photos/ImolaPhoto.png"
    },
    {
        name:"Circuit de Monaco, Monaco",
        firstWinner: "Juan Manuel Fangio, 1950",
        lastWinner: "Max Verstappen, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2015],
        picture:"/Track_Photos/MonacoPhoto.png"
    },
    {
        name:"Autódromo Internacional do Algarve, Portamao, Portugal",
        firstWinner: "Lewis Hamilton, 2020",
        lastWinner: "Lewis Hamilton, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2015],
        picture:"/Track_Photos/PortomaoPhoto.png"
    },
    {
        name:"Circuit de Barcelona-Catalunya, Spain",
        firstWinner: "Nigel Mansell, 1991",
        lastWinner: "Lewis Hamilton, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/BarcelonaPhoto.png"
    },
    {
        name:"Baku City Circuit, Azerbaijan",
        firstWinner: "Daniel Ricciardo, 2016",
        lastWinner: "Sergio Perez, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/BakuPhoto.png"
    },
    {
        name:"Hungaroring, Hungary",
        firstWinner: "Nelson Piquet, 1986",
        lastWinner: "Esteban Ocon, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/HungaryPhoto.png"
    },
    {
        name:"Circuit Paul Ricard, France",
        firstWinner: "Jackie Stewart, 1971",
        lastWinner: "Max Verstappen, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/PaulRicardPhoto.png"
    },
    {
        name:"Red Bull Ring, Styria, Austria",
        firstWinner: "Jacky Ickx, 1970",
        lastWinner: "Max Verstappen, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/StyriaPhoto.png"
    },
    {
        name:"Silverstone Circuit, Great Britain",
        firstWinner: " Giuseppe Farina, 1950",
        lastWinner: "Lewis Hamilton, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/SilverstonePhoto.png"
    },
    {
        name:"Circuit de Spa-Francorchamps, Belgium",
        firstWinner: "Juan Manuel Fangio, 1950",
        lastWinner: "Max Verstappen, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/SpaPhoto.png"
    },
    {
        name:"Autodromo Nazionale Monza, Italy",
        firstWinner: "Giuseppe Farina, 1950",
        lastWinner: "Daniel Ricciardo, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/MonzaPhoto.png"
    },
    {
        name:"Sochi Autodrom, Russia",
        firstWinner: "Lewis Hamilton, 2014",
        lastWinner: "Lewis Hamilton, 2021",
        yearsActive:[2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/SochiPhoto.png"
    },
    {
        name: "Intercity Istanbul Park, Turkey",
        firstWinner: "Kimi Räikkönen, 2005",
        lastWinner: "Valtteri Bottas, 2021",
        yearsActive: [2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/TurkeyPhoto.png"
    },
    {
        name: "Circuit of The Americas, USA",
        firstWinner: "Lewis Hamilton, 2012",
        lastWinner: "Max Verstappen, 2021",
        yearsActive: [2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/AmericasPhoto.png"
    },
    {
        name: "Autódromo Hermanos Rodríguez, Mexico",
        firstWinner: "Jim Clark, 1963",
        lastWinner: "Max Verstappen, 2021",
        yearsActive: [2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/MexicoPhoto.png"
    },
    {
        name: "Autódromo Hermanos Rodríguez, Mexico",
        firstWinner: "Jim Clark, 1963",
        lastWinner: "Max Verstappen, 2021",
        yearsActive: [2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/MexicoPhoto.png"
    },
    {
        name: "Autódromo José Carlos Pace / Interlagos, Brazil",
        firstWinner: "Emerson Fittipaldi, 1973",
        lastWinner: "Max Verstappen, 2021",
        yearsActive: [2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/BrazilPhoto.png"
    },
    {
        name: "Losail International Circuit, Qatar",
        firstWinner: "Lewis Hamilton, 2021",
        lastWinner: "Lewis Hamilton, 2021",
        yearsActive: [2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/QatarPhoto.png"
    },
    {
        name: "Jeddah Corniche Circuit, Saudi Arabia",
        firstWinner: "Lewis Hamilton, 2021",
        lastWinner: "Lewis Hamilton, 2021",
        yearsActive: [2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/JeddahPhoto.png"
    },
    {
        name: "Yas Marina Circuit, Abu Dhabi",
        firstWinner: "Sebastian Vettel, 2009",
        lastWinner: "Max Verstappen, 2021",
        yearsActive: [2021,2020,2019,2018, 2017, 2016],
        picture:"/Track_Photos/AbuDhabiPhoto.png"
    }
]

//Page navigation hiding and showing
const startPage=document.querySelector('.start');
const playPage=document.querySelector('.play');
const resultPage=document.querySelector('.result');

//.start to .setup transition
const beginGameButton=document.querySelector('button#begin-game');

beginGameButton.addEventListener('click', function(){
    playPage.style.display = "block";
    startPage.style.display = "none";
})

//.result to .setup transition
const restartButton=document.querySelector('button#play-again');

restartButton.addEventListener('click', function(){
    startPage.style.display = "block";
    resultPage.style.display = "none";
})

const numOfTracks=trackInfo.length;


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
    if (roundAnswer.length == 10){ //hide/show the buttons on last round
        seeResultButton.style.display = "block"; //this is making button left-align 
        nextButton.style.display = "none";
    } else if (roundAnswer.length==0){ //hiding .setup and showing .play on start of round
        playPage.style.display = "block";
        startPage.style.display = "none";
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
        if (selectedOptions[i].style.backgroundColor == "green" || selectedOptions[i].style.backgroundColor == "red"){
            selectedOptions[i].style.backgroundColor = "black";
        }
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
            return "Perfect score! Try again, there will be different tracks every time.";
        case(8||9):
            return "Nearly perfect, try again!";
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