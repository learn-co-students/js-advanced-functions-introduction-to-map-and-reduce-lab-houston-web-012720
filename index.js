
function mapToNegativize(arr) {
  return arr.map(i => i = -i)
}

function mapToNoChange(arr) {
  return arr.map(i => i = i)
}

function mapToDouble(arr) {
  return arr.map(i => i * 2)
}

function mapToSquare(arr) {
  return arr.map(i => i * i)
}

function reduceToTotal(arr, start = 0) {
  return arr.reduce((acc, i) => acc + i, 0) + start
}

function reduceToAllTrue(arr) {
  return arr.every((i) => { return i })
}

function reduceToAnyTrue(arr) {
  return arr.some((i) => { return i })
}

