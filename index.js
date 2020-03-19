function mapToNegativize(arr){
  // this returns the original array modified
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * -1
  }
  return arr

  // // this returns a new modified array
  // newArr = arr.slice()
  // for (let i = 0; i < newArr.length; i++){
  //   newArr[i] = newArr[i] * -1
  // }
  // return newArr
}

function mapToNoChange(arr){
  // ??? this dont even map. but why
  return arr
}

function mapToDouble (arr){
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 2
  }
  return arr
}

function mapToSquare (arr){
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] ** 2
  }
  return arr
}

function reduceToTotal(arr, num = 0){
  let total = num
  for (let i = 0; i < arr.length; i++){
    total = total + arr[i]
  }
  return total
}

function reduceToAllTrue(arr){
  // returns true if array is empty 
  let allTrue = true 
  for ( let i = 0 ; i < arr.length; i++){
    allTrue && arr[i] ? allTrue = true : allTrue = false
    // console.log(arr[i])
    if (allTrue !== true){
      break
    }
  }
  return allTrue 
}

function reduceToAnyTrue(arr){
  let anyTrue = false 
  for (let i=0; i < arr.length; i++){
    arr[i] ? anyTrue = true : anyTrue = false
    // console.log(arr[i])
    if (anyTrue === true){
      break
    }
  }
  return anyTrue
}
