var rlline=require('readline');
const rl=rlline.createInterface({
    input: process.stdin,
 output: process.stdout,
});
var array=new Array();
rl.question("Enter the length of array?", function (answer) {
number=answer;
    rl.setPrompt(`Enter the number?`);
        rl.prompt();
        rl.on('line', function (reply) {
            array.push(reply);
           if(array.length==number){
            rl.close();
           }else {
        rl.prompt();
           }
        });
});
rl.on('close', function () {
    console.log(array.sort((a,b) => isNaN(a) || a-b))
    process.exit();
});
