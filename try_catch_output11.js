(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log("a",x);
    }
    console.log("b",x);
    console.log(y);
})();