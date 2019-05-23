var promise = new Promise(function (res, rej) {
    setTimeout(() => rej(new Error('REJECTED!')), 300);
});
function onReject(error) {
    console.log(error.message);
}
promise.then('', onReject);