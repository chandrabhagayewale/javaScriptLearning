function counterCharA(string){
    var count=0;
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
         if (char=='a' || char=='A'){
         console.log(char);
          count=count+1;}
    
}
console.log(`total number of number of  characters in given string ${count}`);
}

counterCharA("I AM learning Javascript,The Language of internet");
counterCharA("My favourite movie is LAggAn");
