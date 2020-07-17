// Purpose:This function will return miles by feet input.
// Initialize a function.
function feetToMile(feet){
	var mile = feet/5280; //5280 feet is equal to 1 mile.  
	if(feet>0){
        return mile;
    }
    else {
        return "Negative number is not allowed.please try again!";
    }
}
var result = feetToMile();
console.log(result);


// Purpose:This function will return how many cubic feet of wood are needed to make a chair table & bed.
// Initialize a function.
function woodCalculator (chair,table,bed){   
    if(chair>0 && table >0 && bed>0){
      var chair = chair*1; //It takes 1 cubic feet of wood to make a chair.
      var table = table*3; //It takes 3 cubic feet of wood to make a table.
      var bed = bed*5; //It takes 5 cubic feet of wood to make a bed.
      var totalCountOfWood = chair+table+bed; //Total cubic feet of wood required.
      return totalCountOfWood;
    }
    else {
        return "You have entered a invalid number.please try again!";
    }
}        
var result = woodCalculator();
console.log(result);


// Purpose: This function will return how many bricks it would take to build an infinity number of floor from 1.
// Initialize a function.
function brickCalculator (floor){
    var amountOfBrick = 1000; //Bricks are needed for every feet.
    if(floor>=1 && floor<=10){
        var feetHeight =amountOfBrick*15; //From one to 10 floors are given 15 feet height.
        amountOfBrick = feetHeight*floor;
        return amountOfBrick;
    }
    else if (floor>=11 && floor<=20){
        //The amount of brick has been identified by 15 feet for the first 10 floors.
        var oneToTen = (amountOfBrick*15)*10; 
        //From 11 to 20 floors are given 12 feet height.The amount of bricks in the first 10 floors has been omitted.
        var feetHeight =(amountOfBrick*12)*(floor-10); 
        amountOfBrick =(oneToTen+ feetHeight);
        return amountOfBrick;
    }
    else if(floor>=21){
        //The amount of brick has been identified by 15 feet for the first 10 floors.
        var oneToTen = (amountOfBrick*15)*10; 
        //The amount of brick has been identified by 12 feet for the Second 10 floors.
        var elevenToTwenty =(amountOfBrick*12)*10;
        //From 21 floors are given 10 feet height.The amount of bricks in the first 10 floors & second 10 floors has been omitted.
        var feetHeight =(amountOfBrick*10)*(floor-20);
        amountOfBrick =(oneToTen+ elevenToTwenty+feetHeight);
        return amountOfBrick;
    }
    else {
        return 'You have entered a invalid number.please try again!';
    }
}
var result = brickCalculator();
console.log(result);


//This function will return the smallest name from an array.
// Initialize a function.
function tinyFriend(name){
    var smallest = name[0]; //For example, the first index of the array is the smallest.
    for(var i = 0 ; i<name.length ; i++){
        var nameLength = name[i]; //The length of the array is identified.
        if(nameLength < smallest){
            smallest=nameLength;
        }
    }
    return smallest;
}
var result = tinyFriend();
console.log(result);

