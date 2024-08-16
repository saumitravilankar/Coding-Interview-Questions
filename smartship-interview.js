// ip: [1,2,3,4]
// op: [24,12,8,6]

function ProblemOne(numArray) {
  const outputArray = [];
  for (let i = 0; i <= numArray.length - 1; i++) {
    const filteredArray = numArray.filter(
      (item) => numArray.indexOf(item) !== i
    );
    const multiplicationResult = filteredArray.reduce(
      (acc, val) => (acc *= val),
      1
    );
    outputArray.push(multiplicationResult);
  }
  return outputArray;
}

console.log(ProblemOne([1, 2, 3, 4]));

// ip: 5
/**
 * op:
 * 54321
 * 4321
 * 321
 * 21
 * 1
 */

function ProblemTwo(num) {
  let result = "";
  for (let i = num; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      result += j;
    }
    result += "\n";
  }
  return result;
}

console.log(ProblemTwo(5));
