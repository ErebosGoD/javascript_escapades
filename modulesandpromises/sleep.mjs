const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Wie gehts")
    }, 3000)
}).then((resolvedValue) => {
    console.log(resolvedValue);
})
console.log(testPromise);