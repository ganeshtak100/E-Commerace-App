Array.prototype.myMap = function (cb) {
  let newArr = [2, 4, 6, 8];
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    result[i] = cb(newArr[i], i, newArr);
  }

  console.log(result);
};

function cb(value, index, arr) {
  return value * 2;
}

myMap(cb());
module.exports = myMap;
