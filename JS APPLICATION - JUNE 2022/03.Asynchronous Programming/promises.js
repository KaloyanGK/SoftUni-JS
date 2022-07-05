// // let num = 1
// let promise = new Promise(function (resolve, reject) {
//     if (num > 0.5) {
//         resolve(`It is bigger then 0.5`);
//     } else {
//         reject(`It is smaller then 0.5`);
//     }

// });
// promise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))


let alwaysIsTrue = Promise.resolve(`yes`);
let alwaysIsFalse = Promise.reject(`no`);

alwaysIsTrue.then((e) => console.log(e));
alwaysIsFalse.catch((e) => console.log(e));