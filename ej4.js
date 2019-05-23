var promise = new Promise(function (res, rej) {
    res('I FIRED');
    rej(new Error('I DID NOT FIRE'));
});

function onReject(error) {
    console.log(error.message);
}

promise.then(console.log, onReject);