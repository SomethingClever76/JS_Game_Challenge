let teamOneButton = document.querySelector ("#teamone-shoot");
let teamOneShotCounter = document.querySelector ("#teamone-numshots")
let teamOneGoals = document.querySelector ("#teamone-numhits");
let teamOnesoundBite = new Audio("./assets/audio/crowdcheer.mp3")

teamOneButton.addEventListener ("click", function()
{
    
    teamOneShotCounter.innerHTML = parseInt(teamOneShotCounter.innerHTML) + 1;

    if (Math.random() < .25)
    {
        teamOnesoundBite.play()
        teamOneGoals.innerHTML = parseInt(teamOneGoals.innerHTML) + 1;
    }
})


let teamTwoButton = document.querySelector ("#teamtwo-shoot");
let teamTwoShotCounter = document.querySelector ("#teamtwo-numshots")
let teamTwoGoals = document.querySelector ("#teamtwo-numhits");

teamTwoButton.addEventListener ("click", function()
{
    teamTwoShotCounter.innerHTML = parseInt(teamTwoShotCounter.innerHTML) + 1;

    if (Math.random() < .25)
    {
        teamTwoGoals.innerHTML = parseInt(teamTwoGoals.innerHTML) + 1;
    }
})


let resetButton = document.querySelector ("#reset");
let resetCounter = document.querySelector ("#num-resets");

resetButton.addEventListener ("click", function()
{

    teamOneShotCounter.innerHTML = 0;
    teamOneGoals.innerHTML = 0;
    teamTwoShotCounter.innerHTML = 0;
    teamTwoGoals.innerHTML = 0;

    


    resetCounter.innerHTML = parseInt(resetCounter.innerHTML) + 1; 
})