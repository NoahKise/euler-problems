const startingArray = [1, 2];

const fibArray = (array) => {
    if (array[(array.length) - 1] > 4000000) {
        return array.slice(0, (array.length - 1));
    } else {
        array.push((array[(array.length) - 1]) + (array[(array.length) - 2]));
        return fibArray(array);
    };
};

const fibEvens = (array) => {
    const evenFibArray = array.filter(element => element % 2 === 0);
    return evenFibArray;
};

const sum = (fibEvens(fibArray(startingArray))).reduce(function(currentValue, element){
    return element + currentValue;
}, 0);


