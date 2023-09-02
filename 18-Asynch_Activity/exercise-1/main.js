let balance = 1000;
let transaction1, transaction2, transaction3;

transaction1 = balance + 500;
balance = transaction1;

transaction2 = balance - 200;
balance = transaction2;

transaction3 = balance - 1000;
balance = transaction3;

console.log(balance);
