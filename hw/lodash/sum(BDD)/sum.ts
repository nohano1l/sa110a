//_.sum([4, 2, 8, 6]) => 20
export function sum(array:any[]) {
    const clist = []
    var sum = 0
    for (let i=0; i<array.length; i++) {
        sum += array[i]
    }
    return sum
  }