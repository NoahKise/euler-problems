const numArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const checker = (num) => {
    const endArray = numArray.filter(e => num % e === 0)
    console.log(endArray);
    if (endArray.length === 10) {
        return `The answer is ${num}`;
    } else {
    const newNum = num + 2520;
    return checker(newNum);
    }
}
//works but breaks call stack
//answer = 232792560
//anotherway:
function findSmallestDivisible() {
    let result = 1;

    for (let i = 2; i <= 20; i++) {
        result = lcm(result, i);
    }

    return result;
}

function gcd(a, b) {
    // Calculate Greatest Common Divisor using Euclidean algorithm
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    // Calculate Least Common Multiple using GCD
    return (a * b) / gcd(a, b);
}

const smallestDivisible = findSmallestDivisible();
console.log("The smallest number divisible by 1 to 20 is:", smallestDivisible);