var read=require('readline');
const rl = read.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
 var array=[];
// for (let index = 0; index < array.length; index++) {
//    console.log(array);
//     rl.close();
// }

rl.question('What do you think of Node.js? ', function(answer) {
            // TODO: Log the answer in a database
         console.log(answer);
         rl.on("arrayvalues",function(sam){
             console.log(array);

            //  console.log(array);
            //  process.exit(0);
         });
      //  rl.question (answer);
        // if(array.length>0){
        //   rl.close();
        // }
          
          }); 
         
    



// for(var i=0;i<=6;i++){
// if(array.length<=6){
//     console.log(array.length);
 
//     rl.question('What do you think of Node.js? ', (answer) => {
//         // TODO: Log the answer in a database
//         console.log(`Thank you for your valuable feedback: ${array.push(answer)}`);
      
      
//       });
//     } else{
//         rl.close();
//     }
// }
// console.log(array);

// array.push(1);
// array.push(2);
// if(array.length==1){
// console.log(array.length);
// }
// console.log(array);
// array.pop();
// if(array.length==1){
//     console.log(array.length);
//     }
//     console.log(array);
       // array.push(1);

//        rl.question('enter number',number =>{
// array.push(number);


//         }
        // if(array.length<=6){
        // for (let item of myArray) {
        //     console.log(item);
        //   }
        // }


    

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(array.length);
//   if(array.length <= 6){
//       console.log("hell0");
//   }
//   else{
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();
//   }

// });


// if(array.length <= 6){
//     rl.question('What do you think of Node.js? ', (answer) => {
//         array.push(answer);
//         if(array.length == 6){
//             rl.close(); 
//         }
//     });
// }
// else{
// console.log(`Thank you for your valuable feedback: ${answer}`);
// rl.close();
// }



//   rl.prompt();
  
//   rl.on('line', (line) => {

//     switch (array.length <= 6) {
//       case '1':
//       if(array.length<= 6){
//       array.push(line);
//             rl.prompt();
//            }
//            else {
//             process.exit(0);
//             rl.prompt();
//            }

      
//     }
// //    if(array.length > 6){
// //     process.exit(0);
// //     rl.prompt();
// //    }
// //    else {
// //     rl.prompt();
// //    }
//   }).on('close', () => {
//     console.log('Have a great day!');
//     process.exit(0);
//   });
// console.dir(rl);

// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  

//   });

// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });


// myEmitter.on('event', () => {
    
 // });

//  for (let i = 0; i < array.length; i++) {
//   if(array.length< 6){
//    console.log(array);
//   }
//   else{
//       process.exit(0);
//   }
// }
// var sub_array = [];

// function test() {
   
//     var super_array = [];
//     for (let i = 1; i <= 3; i++) {
//         array.push(i);
//        sub_array.push(i);
//         // super_array.push(sub_array.slice(0));
//     }
  
// }

// console.log(sub_array);
// console.log(array);
// // rl.close();


// rl.question('What do you think of Node.js? ', function(entervalue) {
//             // TODO: Log the answer in a database
//             // console.log(`Thank you for your valuable feedback: ${array.push(answer)}`);
// array.push(entervalue);
// console.log(array.length);

// if(array.length<=6)
// {
   
//     rl.setPrompt("here the array length is less than 6");
//     rl.prompt();
//     rl.on("Enter the number",function(answer){
//         array.push(answer)
//         rl.prompt();
//     })
//     console.log(array);
//    // rl.close();
//     // rl.prompt("arry lenth is less than 6",function(answer){
//     //     rl.on("if less than lenght",function(answer){
//     //         array.push(answer);
//     //         console.log("hi");
//     //     });
//     // })
//  // process.exit(0);

// }
// // rl.close();  
// });