$(document).ready(function () {
    
    $("#header").html("<a href='https://N-eeraj.github.io/jQuery-learning'>Home</a>");

    for(i=0; i<16; i++)
        $(".game-area").append("<button data-id='8' class='tile'></button>");
    
    // selecting a card/tile
    $(".tile").on("click",function() {selectCard($(this))});

    $("#reset").on("click", () => window.location="index.html");


});

let cardImg = "url('https://files.123freevectors.com/wp-content/original/19118-abstract-dark-purple-square-background-template.jpg')";

// selected card
const getTile = () => {
    random = Math.floor(Math.random() * imageList.length);
    let img = imageList[random];
    if(img !== undefined)
        return img;
    return getTile();
};

// select card/tile
function selectCard(element)
{
    element.off("click");

    let tileNum = getTile();
    
    if(element.attr("data-id") == 8)
    {
        selectNum = tileNum;
        element.attr("data-id", tileNum);
    }
    else
        selectNum = element.attr("data-id");
        
    let tileImg = "url(images/" + selectNum + ".png)";
    element.css("background-image", tileImg).css("background-size", "70%");
    selection.push(selectNum);

    if(selection.length == 1)
    {
        firstSelection = element;
        firstNum = selectNum;
    }
    else
    {
        if(selection[0] == selection[1])
        {
            console.log("Match");
            imageList = imageList.filter((i) => i != selectNum);
        }
        else
        setTimeout(() => {
            console.log("Not Match");
            score -= 5;
            element.css("background-image", cardImg).css("background-size", "contain").on("click",function() {selectCard($(this))});
            firstSelection.css("background-image", cardImg).css("background-size", "contain").on("click",function() {selectCard($(this))});
        }, 1000);
        selection = [];
    }

    if(imageList.length == 0)
    {

        $("#score").append("<h1>Score: "+ score + "</h1>");

        console.log("Game Over")
        console.log("Score: " + score);
    }
    else
    {
        imageList = imageList.filter((i) => i!=undefined).sort();
    
        console.log("Selected: " + selectNum);
        console.log("Balance: " + imageList);
    }

}

// creating image array
var imageList = [];
for(i=0; i<8; i++){
    imageList.push(i);
    imageList.push(i);
}

let selection = [];
let firstSelection;
let firstNum;

let score = 100;