let n = 4;
let m = 4;
let l = 4;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    let k = l - j;
    if ((k !== 0 && k >= j) || k === 1) {
      process.stdout.write("  "); 
    } 
    else {
      process.stdout.write("* "); 
    }
  }
  l--;
  console.log(""); 
}