var arrObject = [{ fname: "sumon" }, "fname"];

var copys = arrObject;

function deleteProperty(values) {
  const mainArr = values;
  const objects = mainArr[0];
  const arrSecond = mainArr[1];

  if (Object.keys(objects) == arrSecond) {
    mainArr.shift();
    return "OK";
  } else {
    return "NO";
  }
}
console.log(arrObject);

var objElementDelete = deleteProperty(arrObject);

console.log("after : ", copys);

console.log(objElementDelete);
