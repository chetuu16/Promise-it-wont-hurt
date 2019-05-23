var promise = new Promise(function (res, rej) {
    res('PROMISE VALUE');
});
try{
    promise.then(console.log);
} finally {
    console.log('MAIN PROGRAM');
}