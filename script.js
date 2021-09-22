function checkBig(num) {
    if (num > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(checkBig(10));
console.log(checkBig(50));
console.log(checkBig(100));
console.log(checkBig(101));
console.log(checkBig(1000));

function brenda(max, curr, age) {
    if (age < 18) {
        return "Brenda: 'This is a club for adults.'"
    } else if (curr >= max) {
        return "Brenda: 'It's too busy now. Come back later.'"
    } else {
        return "Brenda: 'Come in. Don't start any trouble.'"
    }
}

console.log(brenda(200, 126, 29));
console.log(brenda(100, 126, 29));
console.log(brenda(200, 126, 17));

// This is a function that produces something (= a message from Brenda).

function averageOfFive(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

let result = averageOfFive(52, 25, 16, 22, 43);
console.log('Result: ' + result);
console.log('Rounded number: ' + Math.round(result));

// This is a function that produces something (= the average number)