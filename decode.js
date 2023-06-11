// console.log(device.encode("aaa"));

function getNumber(char) {
  const charCodeA = "a".charCodeAt(0);
  const charCodeInput = char.charCodeAt(0);
  return charCodeInput - charCodeA + 1;
}
console.log(getNumber('n'));

// decode = function (w) {
//   let arr = w.split("");
//   let res = "";
//   for (let [index, value] of arr.entries()) {
//     let val = 0;
//     for (let i = 0; i <= index; i++) {
//       val = getNumber(value);
//       val = value.charCodeAt(0) - val + 1;
//       value = String.fromCharCode(val);
//     }
//     res += value;
//   }
//   console.log(w);
// //   console.log(res);
//   return res;
// };
//121 84 25
// console.log(decode('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'))
// console.log(decode('1ZNtt58GxrgKydwwtxTOZRuc.6v5tP9.9b9As31xAQXNiXaPuun1L'))
// console.log(decode('pJrZkmYVxPA5oJGXUW?OR?E3MJglc5,39Cd41rh1HHsGhrERKOPWdq'))
// console.log(decode('Dx6Z2Zf9PgyS3ExpLy?Yo,E6rUvfOPgzV8gqpDS8o0OGzfu'))
// console.log(decode('HqNJKNRGmVH1WxNj?AEzXDWiYUURtoqC0be6ElAqqkXdiWq'))
// console.log(decode('zJF-CZXBFglEWVNXUR?CQWg0YUCVxhW6UCdQBu7fOaMW'))
// console.log(decode('BtzGkmaNxK.5q yTT0m3oRLVTbx5CPkCUYdvY0oUE'))
