$(document).ready(function () {
    
    $("#header").html("<a href='https://N-eeraj.github.io/jQuery-learning'>Home</a>");
    
    // selecting a card/tile
    $(".tile").on("click",function() {selectCard($(this))});

});

let cardImg = "url('https://files.123freevectors.com/wp-content/original/19118-abstract-dark-purple-square-background-template.jpg')";

// delete selected card
const getTile = () => {
    random = Math.floor(Math.random()*16);
    let img = imageList[random];
    if(img !== undefined)
    {
        delete imageList[random];
        return img;
    }
    return getTile();
};

// select card/tile
function selectCard(element)
{
    console.log(element);
    element.off("click");

    let tileNum = getTile();
    let tileImg = "url(images/" + tileNum + ".png)";
    
    element.css("background-image", tileImg).css("background-size", "70%");
    selection.push(tileNum);

    setTimeout(() => {
        if(selection.length == 1)
        firstSelection = element;
    else
    {
        if(selection[0] == selection[1])
        {
            console.log("Match");
        }
        else
        {
            console.log("Not Match");
            element.css("background-image", cardImg).css("background-size", "contain").on("click",function() {selectCard($(this))});
            firstSelection.css("background-image", cardImg).css("background-size", "contain").on("click",function() {selectCard($(this))});
        }
        selection = [];
    }
    }, 1000);

    

    console.log("Selected: " + tileNum);
    console.log("Balance: " + imageList);
}

// creating image array
const imageList = [];
for(i=0; i<8; i++){
    imageList.push(i);
    imageList.push(i);
}

let selection = [];
let firstSelection;