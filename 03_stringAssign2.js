console.log(`==========String Handson===========`);
var stringHandsOn=function(){
    console.log(`   Hey you are doing good ,keep it up   `);
    var str="   Hey you are doing good, keep it up   ";
    var totalLength=str.length
    console.log( `2.length of the string: ${totalLength}`);
     var trimString=str.trim();
    console.log(`3.stringtrim: ${trimString}`);
    var trimStringLength=trimString.length;
    console.log(`4.Total extra spaces count is: ${totalLength-trimStringLength}`)
    var totalWord=trimString. split(" ");
    console.log(`5: Total word in sentence: ${totalWord.length}`);
     var indexOf=trimString.indexOf("good");
     console.log(`6:index of "good" : ${indexOf}`);
     var result=trimString.slice(22);
     console.log(`7.substring from index 22: ${result}`);
     console.log(`8:String ends with "up": ${trimString.endsWith("up")}`);
     console.log(`9:String starts with "Hey": ${trimString.startsWith("Hey")}`);


    
}
stringHandsOn();