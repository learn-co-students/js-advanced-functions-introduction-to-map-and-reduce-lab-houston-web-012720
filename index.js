// Your code here


let mapToNegativize = (sourceArray) => sourceArray.map(val => 0 - val)
let mapToNoChange = (sourceArray) => sourceArray
let mapToDouble = (sourceArray) => sourceArray.map(val => val*2)
let mapToSquare = (sourceArray) => sourceArray.map(val => val**2)


let reduceToTotal = (sourceArray, startingPoint=0) => sourceArray.reduce((s,v) => s + v, startingPoint)
let reduceToAllTrue = (sourceArray) => sourceArray.reduce((res, val) => res = !!val)
let reduceToAnyTrue = (sourceArray) => sourceArray.reduce((res,val) => !!val? res = true: res, false)