 function squareOfWordLength(str){
    console.log("================Square Of Word Length====================");
    var length=str.length;
    return length*length;
 
 }
    console.log(`the square of word length "JavaScript"  is ${squareOfWordLength("JavaScript")}`);
    console.log(`the square of word length "Google Chrome"  is ${squareOfWordLength("Google Chrome")}`);
    console.log(`the square of word length "Google Chrome"  is ${squareOfWordLength("Google Chrome")}`);
    console.log(`the square of word length "Developer Smart"  is ${squareOfWordLength("Developer Smart")}`);
 
    console.log("");


    
    var multiDiv= function(){
     var str="I am Angular Developer";
     var length=str.length;
     var splitstr=str.split(" ");
     var splitlength=splitstr.length;
     console.log("=================Multiplication & Division===============");
     console.log(`The result of total length divdie by total no. of words is:${length/splitlength}`);
     console.log(`the result of total length multiple by the total no. of words is:${length*splitlength}`);
    }
    multiDiv();
    