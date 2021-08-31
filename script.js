$(document).ready(function () {
    
    $("#header").html("<a href='https://N-eeraj.github.io/jQuery-learning'>Back</a>");
    
    $(".tile").on("click", function () {
        $(this).off("click");
        let tileImg = "url(images/" + getTile() + ".png)";
        $(this).css("background-image", tileImg);
        console.log("Selected: " + tileImg);
        console.log("Balance: " + imageList);
    });

});


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

// creating image array
const imageList = [];
for(i=0; i<8; i++){
    imageList.push(i);
    imageList.push(i);
}