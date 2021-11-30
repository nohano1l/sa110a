function monteCarloPi(n) {
  let hits = 0
  for (let i=0;i<n; i++) {
    let x = Math.random()     //會介於0-1之間
    let y = Math.random()
    if (x*x+y*y <= 1) hits++  //點在半徑1的圓裡
  }
  //把在圓裡的機率當面積*4=1*1*π
  return 4*(hits/n)
}

console.log('MonteCarloPi(1000000)=', monteCarloPi(1000000))