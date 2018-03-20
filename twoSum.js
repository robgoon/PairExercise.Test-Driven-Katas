const twoSum = (intArr, targetSum) => {
  let sum,
      indexArr = [];

  for (let i = 0; i < intArr.length; i++) {
    for (let j = i + 1; j < intArr.length; j++) {
      sum = intArr[i] + intArr[j];

      if (sum === targetSum){
        indexArr.push(i, j);
      }
    }
  }

  return indexArr;
}

module.exports = twoSum

/*
1 2
1 3

2 3



1 2
1 3
1 4

2 3
2 4

3 4

*/
