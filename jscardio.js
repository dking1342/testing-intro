export const reverseString = (str) =>
  str.toLowerCase().split("").reverse().join("");

export const chunkArray = (arr, len) => {
  const chunkedArray = [];

  arr.forEach((val) => {
    const last = chunkedArray[chunkedArray.length - 1];

    if (!last || last.length === len) {
      chunkedArray.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArray;
};

export const chunkArray2 = (arr, len) => {
    let replicateArr = arr;
    const chunkedArr = []

    while(replicateArr.length > 0){
        let arrayFill = replicateArr.slice(0,len);
        chunkedArr.push(arrayFill);
        arr.splice(0,len)
    }
    return chunkedArr;
}

export const isAnagram = (str1, str2) => {
    return formatStr(str1) === formatStr(str2);
}

const formatStr = (str) => {
    let test = str;
    test = test.replace(/[\s]/g,"")
    test = test.toLowerCase();
    test = test.split("");
    test = test.sort();
    test = test.join("");
    return str
        .replace(/[\s]/g,'')
        .toLowerCase()
        .split("")
        .sort()
        .join("");
}
console.log(isAnagram("dormitory","dirty room"))

