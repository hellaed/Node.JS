//Heraldo Ghattas
//Yousef Hatukai
for (let i = 0; i < 127; i++) {
  flag = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) flag = false;
  }
  if (flag && i != 0 && i != 1) console.log(i);
}
