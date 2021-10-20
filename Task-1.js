let arr = [2, 0, 2, 'fadf', 3, 6, 0, NaN, 'true', 324, null];
const arr1 = [0, null, NaN, 0, 1, 2, 4, "str"];

function calcTypesOfElements(array) {
  let sumOdd = 0;
  let sumEven = 0;
  let sumZero = 0;

  for (let i = 0; i < array.length; i++) {
    if (Number.isFinite(array[i])) {
      if (array[i] === 0) {
        sumZero++
      } else if (array[i] % 2 === 0) {
        sumOdd++
      } else {
        sumEven++
      }
    }
  }
  console.log(`odd: ${sumOdd}, even: ${sumEven}, zero: ${sumZero}`)
}

calcTypesOfElements(arr)