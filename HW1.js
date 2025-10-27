//Heraldo Ghattas
//Yousef Hatukai

console.log("Hello World!");
const num = 30;
const flag = (num % 2 && num % 3) == 0;
const flag6 = (num % 5 && num % 3) == 0;
const flag7 = (num % 5 && num % 2) == 0;
const flag1 = (num % 2 && num % 3 && num % 5) == 0;
const flag3 = num % 2 == 0;
const flag4 = num % 3 == 0;
const flag5 = num % 6 == 0;

//all flags
const flagThree = flag1;
const flagTwo = flag6 && flag7 && flag;
const flagOne = flag5 && flag4 && flag3;

console.log(flagThree + flagTwo + flagOne);
