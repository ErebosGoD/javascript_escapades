const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
//executor function which accepts 2 functions as arguments, resolve, reject
//resolve function sets promise status from pending to fullfilled
//reject function sets promise status from pending to rejected
//resolved/rejected with an if statement
const myExecutor = (resolve, reject) => {
    console.log("Hallo");
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};
// Deklarierung einer function, die ein Promise return, welches als argument die executor function entgegennimmt
const orderSunglasses = () => {
    return new Promise(myExecutor);
};

const TestPromise = new Promise(myExecutor)

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
    console.log("Test string ist cool");
    return "Sunglasses order shipped."
}
const handleFailure = (rejectedValue) => {
    console.log("That item is sold out.");
}
//.then nimmt 2 handler functions entgegen A success B failure
//wenn promise resolved dann A wenn promise rejected dann B
//.catch hingegen nimmt nur die handleReject function entgegen 

//variante A mit seperaten function declarations
const orderPromise = orderSunglasses().then(handleSuccess).then(handleSuccess)

//then und catch lieber direkt verwenden anstatt als seperate functions deklarieren

const orderPromise2 = orderSunglasses()
    .then((resolvedValue) => {
        console.log("Sunglasses order shipped.");
    })
    .catch((rejectedValue) => {
        console.log("That item is sold out.");
    });

console.log(orderPromise);

