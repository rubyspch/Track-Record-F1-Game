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

const numOfTracks=trackInfo.length;

const startGameButton = document.querySelector('button#startGameButton');

startGameButton.addEventListener('click', setupGame);

const image = document.querySelector('img#track-photo');
const selectedOptions = [document.querySelector('button#option-1'), document.querySelector('button#option-2'), document.querySelector('button#option-3')];
selectedOptions.forEach(element => {
    element.addEventListener('click', checked);
});
let roundAnswer=[];
let userScore = 0;

function setupGame(){
    let randomNum;
    do{ // Get new random number if the current one has already been used. PROBS NOT THE MOST EFFICIENT METHOD.
        randomNum=Math.floor((Math.random() * numOfTracks))
    } while (roundAnswer.indexOf(trackInfo[randomNum].name));

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
        currentScore++;
        console.log("correct");
    } else{
        userGuess.style.backgroundColor = "red";
        console.log("incorrect");
    }
}