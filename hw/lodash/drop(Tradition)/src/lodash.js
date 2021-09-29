// _.drop([1, 2, 3]) => [2, 3]
// _.drop([1, 2, 3], 2) => [3]
export function drop(list, n=1) {
    const clist = []
   for (let i=n; i<list.length; i++) {
      clist.push(list[i])
   }
   return clist
  }