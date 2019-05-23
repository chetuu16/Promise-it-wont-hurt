function attachTitle(dr) {
    return 'DR. ' + dr;
}

var promise = new Promise(function (res, rej) {
    res("MANHATTAN");
});

promise.then(attachTitle).then(console.log);
