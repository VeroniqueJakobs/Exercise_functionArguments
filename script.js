

//Function with multiple arguments
const paintWallRed = function(item) {
    console.log("The " + item   + " wall has been painted " + item);
};

const chooseWall = "north" ;
const color  = "green" ;

paintWallRed(chooseWall, color );

//If we call the function without an argument, the console will say "The wall has been painted undefined"

