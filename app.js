////1

// const amount = 9;
// if(amount < 10){
//     console.log("small number")
// }
// else{
//     console.log("large number")
// }

// console.log(`my number is ${amount}`)



////2

// console.log(__dirname)
// console.log(__filename);

// setInterval(()=> console.log("hello world"), 2000)



///3  MODULES

// const { singlePerson } = require('./6-alternative');
// const names = require('./firstModule');
// const sayHi = require('./utils')
// require('./7-mind-grenade')

// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);


//BUILT-IN MODULES OS

// const os = require('os');
// console.log(os.userInfo());

//return os uptime in seconds
// console.log(`the system uptime is ${os.uptime()}`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// };

// console.log(currentOS);

//BUILT-IN MODULES PATH

// const path = require('path');
// console.log(path.sep);

// const filePath = path.join
// ('/content', 'subfolder', 'test.txt');

// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const abs = path.resolve(__dirname,
//     'dirname', 'subfolder', 'test.txt');
//     console.log(abs)


//BUILT-IN MODULES FS



// const {readFile, writeFile} = require('fs');
// console.log('start');

// readFile('./content/first.txt','utf8', (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if(err){
//             console.log(err);
//             return;
//         }
//         const second = result;
//             writeFile('./content/result.txt', `result: 2
//         ${first} and ${second}`,
//         (err, result) => {
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log("done with this task");
//         })
//     })
// })

// console.log('starting next task')



//SYNC CODE EXAMPLE

// const {readFileSync, writeFileSync} = require('fs');
// console.log('start');
// // const first = readFile('./content/first.txt', 'utf8');
// // const second = readFile('./content/second.txt', 'utf8');

// writeFileSync(
// './content/result.txt',
// 'this is sync code',
// {flag: 'a'}
// )

// console.log('done');
// console.log('starting the next one')



//BUILT-IN MODULES HTTP

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('welcome to our main page');
//     }
//    else if(req.url === '/about'){
//        res.end('short history')
//    }
//    else {res.end(`
//    <h1>OOPPS!</h1>
//    <p>we can't find the page you are looking for</p>
//    <a href="/"><h1>home page</h1></a>
//    `)}
// });

// server.listen(5000);





