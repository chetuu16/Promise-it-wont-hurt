// function first() {
//     var promise = new Promise(function (res, rej) {
//         res('SECRET VALUE');
//     });

//     return promise;
// }

// function second(val) {
//     var promise = new Promise(function (res, rej) {
//         res(val);
//     });
// }

first().then(val => second(val)).then(console.log);