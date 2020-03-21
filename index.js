// Your code here
function mapToNegativize(array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        newarray.push(array[i] * -1)
    }
    return newarray
}

function mapToNoChange(array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        newarray.push(array[i])
    }
    return newarray
}

function mapToDouble(array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        newarray.push(array[i] * 2)
    }
    return newarray
}

function mapToSquare(array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        newarray.push(array[i] * array[i])
    }
    return newarray
}

function reduceToTotal(array, start = 0) {
    let total = start
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    let value = true
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false) {
            value = false
        }
    }
    return value
}

function reduceToAnyTrue(array) {
    let value = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            value = true
        }
    }
    return value
}