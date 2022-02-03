const run = async() => {
    setTimeout(() => console.log('1'),0)
    const promise = new Promise (resolve => {
        console.log('2');
        resolve();
    }).then(() => {
        console.log('3');
    })
    console.log('4');
    await promise;
    console.log('5');
}
run();