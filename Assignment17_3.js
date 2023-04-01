const arr1 = ["a", "b", "c", "d"];
const arr2 = ["a", "b", "c", "d"];

const iter1 = arr1[Symbol.iterator]();
const iter2 = arr2[Symbol.iterator]();

let match = null;

while (true) {
  const { done: done1, value: val1 } = iter1.next();
  const { done: done2, value: val2 } = iter2.next();

  if (done1 || done2) {
    break;
  }

  if (val1 === val2) {
    match = val1;
    break;
  }
}

if (match) {
  console.log(`Match found: ${match}`);
} else {
  console.log("No match found.");
}
