var promise = new Promise(function(res, rej){
    setTimeout(()=> res('FULFILLED!'), 300);
});
promise.then(console.log);