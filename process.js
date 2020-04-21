// function processArray (items, process, callBack) {
//     let todos = items.concat()

//     setTimeout(function () {
//         let todo = todos.splice(0, 10)
//         process(todo)
//         if (todos.length > 0) {
//             setTimeout(arguments.callee, 100);
//         }else {
//             callBack()
//         }
//     }, 25);
// }


// let items = []
// function process(val) {
//     console.log(`+++++val is: ${val}++++`)
// }
// let processComplete = function() {
//     console.log('game is over!')
// }
// for (let index = 0; index < 1000; index++) {
//     items.push(index)
// }

// processArray(items, process, processComplete)


// let arrs = new Array(10000).fill(null);

// console.time('end');
// console.log(arrs[9999])
// console.timeEnd('end');
// console.time('first');
// console.log(arrs[0])
// console.timeEnd('first');

// example 

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    //async2做出如下更改：
    new Promise(function(resolve) {
        console.log('promise1');
        resolve();
    }).then(function() {
        console.log('promise2');
    });
}
console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();

new Promise(function(resolve) {
    console.log('promise3');
    resolve();
}).then(function() {
    console.log('promise4');
});

console.log('script end');


// micro task   promise2  async1end promise4
// script start -> async1 start -> promise1 -> promise3 -> script end -> promise2  async1end promise4 -> setTimeout 