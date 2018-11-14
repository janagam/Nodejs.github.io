// var rline=require('readline');
// const rl = rline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   var a=[];
// //   while(a.length<=5){
// //       console.log(a.length);
// //    rl.question("Enter the number",(am)=>{
// //        a.push(am);
// //      process.exit(0);
// //    });

// //   }
// rl.setPrompt('Enter');
// rl.prompt(); 
// rl.on('length less than 10',function(a){
//     rl.setPrompt('Enter');
//   rl.prompt(); 
//     });


// // rl.question('Please enter the first number : ', (answer1) => {
// //     let i=1;
// //     a.push(answer1);
// //     console.log(a);
// //     console.log(a.length);

// //         rl.on('length less than 10',function(a){
// //         rl.setPrompt('Enter');
// //       rl.prompt(); 
// //         });
    
// //     // rl.question('Please enter the second number : ', (answer2) => {
// //     //     var result = (+answer1) + (+answer2);
// //     //     console.log(`The sum of above two numbers is ${result}`);
// //     //     rl.close();
// //     // });
// // });

// rl.question('Please enter the first number : ', (answer1) => {
//     rl.setPrompt('Enter');
//  rl.prompt(); 
// rl.on("sample",function(a){
//     rl.setPrompt('Enter2');
//     rl.prompt();



    let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let someProduct = {
    name: '',
    Fruits: [],
    Lemonade: [],
    Meats: []
};

rl.question("What fruits do you want to purchase?", function (answer) {
        someProduct.name = answer;
        rl.setPrompt(`How many ${someProduct.name} you want?`);
        rl.prompt();

        rl.on('line', function (reply) {

            someProduct.Fruits.push(reply.trim());

            if (reply.toLowerCase().trim() === 'no') {
                rl.close();
            } else {
                rl.setPrompt(`Do you need more ${someProduct.name} ('no' to leave)` );
                rl.prompt();
            }
        });
    });

rl.on('close', function () {

    console.log("%s is the fruit you purchase %j", someProduct.name, someProduct.Fruits);
    process.exit();
});


