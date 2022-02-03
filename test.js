const arr = [12, 12, 12, 13, 14, 15, 15];

function checkOccurence(num) {
    let count = 0;
    for (let i = 0;  i<arr.length;i++) {
        if(arr[i] == num) {
            count ++;
        }
    }
    return count;
}

let occurences = checkOccurence(20);

console.log(occurences);