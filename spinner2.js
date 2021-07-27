let draw = { 0: "|", 1: "/", 2: "-", 3: "\\" };
for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${draw[i % 4]}`);
  }, i * 200);
}
