/*
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour === 0 && prepand === ' PM ') { 
  if (minute === 0 && second === 0) { 
    hour = 12;
    prepand = ' Noon';
  } 
  else { 
    hour = 12;
    prepand = ' PM';
  } 
} 
if (hour === 0 && prepand === ' AM ') { 
  if (minute === 0 && second === 0) { 
    hour = 12;
    prepand = ' Midnight';
  } 
  else { 
    hour = 12;
    prepand = ' AM';
  } 
} 
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);
*/

/*
const num = Math.ceil(Math.random() * 100);
console.log(num);
const gnum = prompt('Guess the number between 1 and 100 inclusive');
if (gnum == num)
  console.log('Matched');
else
  console.log('Not matched, the number was ' + gnum);

function difference(n) {
  if (n <= 13)
    return 13 - n;
  else
    return (n - 13) * 2;
}
console.log(difference(42));
console.log(difference(8));
*/

function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}

console.log(testhundred(30));
console.log(testhundred(80));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(220));

function remove_from_right(arr, n = -1) {
  return arr.slice(n);
}

console.log(remove_from_right([5, 6, 7]));
console.log(remove_from_right([5, 6, 7], -1));
console.log(remove_from_right([5, 6, 7], -2));
console.log(remove_from_right([5, 6, 7], -4));

const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 40 }
];

console.log(orderBy(users, ['name', 'age'], ['asc', 'desc'])); 
console.log(orderBy(users, ['name', 'age']));
