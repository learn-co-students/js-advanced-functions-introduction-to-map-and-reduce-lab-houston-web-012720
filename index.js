// Your code here
const mapToNegativize = (arr) => arr.map(element => element * -1)

const mapToNoChange = (arr) => arr.map(element => element)

const mapToDouble = (arr) => arr.map(element => element * 2)

const mapToSquare = (arr) => arr.map(element => element ** 2)

const reduceToTotal = (arr,star_point = 0) => arr.reduce((sum,e) => sum + e , star_point)

const reduceToAllTrue = (arr) => arr.every(element => !!element === true)

const reduceToAnyTrue = (arr) => arr.some(element => !!element === true)