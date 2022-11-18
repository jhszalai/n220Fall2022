//filter, contains
    //let coolThings = ["plasma ball", "moon shoes", "robots", "ice"];
    //let result = coolThings.contains("ice");
    //let result = coolThings.filter(function(thing)) {
    //      return Math.random() > .5;    
    //}
    //for(let i=0; i<coolThings.length; i++) {
    //}
    //console.log(result);

//reduce

//map / foreach
    // for(let i=0; i< MimeTypeAraray.length; i++) {
    //}

//Notes
    /*var tictac = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

myData[1][2];

*/

//Array Computation Practice
    //TicTac 2D Array
    var tictac = [
    ["O","O","O"],
    ["X","X","X"],
    ["O","X","O"],
];


    //for loop to determine vertical and horizontal win conditions
    for(var y=0; y<tictac.length; y++) {
        for(x=0; x<tictac[0].length;x++) {
        let winConditions=tictac.filter(tictac => tictac[y] == "O")
        
        
        
        
        console.log(tictac[y][x]);
    }
}

    
    


