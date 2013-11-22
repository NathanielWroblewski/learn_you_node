var memo = 0;

for (var i=2;i<process.argv.length;++i) {
  memo += +process.argv[i];
}

console.log(memo);
