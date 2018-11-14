var fs = require("fs");
var rlline=require('readline');
const rl=rlline.createInterface({
    input: process.stdin,
 output: process.stdout,
});

fs.mkdir('D:/Nodejs/tmp', { recursive: true }, (err) => {

    if (!err){
console.log("directory created");
    }else{
        console.log("directory already created");
    } 

    fs.exists('D:/Nodejs/tmp/passwd.txt', (exists) => {
        var writeStream=null;
    if (!exists){
        console.log("file created");
        writeStream = fs.createWriteStream("D:/Nodejs/tmp/passwd.txt");
        rl.question("What fruits do you want to purchase?", function (answer) {
            writeStream.write(answer);
            rl.close();
        });
        // writeStream.write("Hi, JournalDEV Users. ");
        // writeStream.write("Thank You.");
        writeStream.end;
            }else{
                console.log("file already created");
             console.log(fs.readFileSync('D:/Nodejs/tmp/passwd.txt', 'utf8'));
            } 
      
      });
    
  });