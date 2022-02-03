let promise = new Promise((resolve, reject) => {
    let flag = 0;
    if (flag > 0) {
        resolve()
    }
    else reject("Error: Something went wrong")
})

promise
    .then(() => console.log("promise fulfilled"))
    .catch(err => console.log(err))