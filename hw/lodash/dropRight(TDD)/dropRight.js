// _.dropRight([1, 2, 3]) => [1, 2]
// _.dropRight([1, 2, 3], 2) => [1]
function dropRight(list, n=1) {
    const clist = []
   for (let i=0; i<list.length-n; i++) {
      clist.push(list[i])
   }
   return clist
  }

  module.exports = dropRight;