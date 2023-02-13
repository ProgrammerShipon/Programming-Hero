// calculation method - ourValue ((8 * 3) + 10) / 2 - 5
function mindGame(numbers) {
  // type and negative number check
  if (typeof numbers === "number" && numbers > 0) {
    return (numbers * 3 + 10) / 2 - 5;
  } else {
    return "Please Valid Data";
  }
}

// The length of your array index is even or odd
function evenOdd(str) {
  // type check
  if (typeof str == "string") {
    let lengthStr = str.length;
    if (lengthStr % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Please Valid Data";
  }
}

// it will take a number as input
function isLGSeven(number) {
  // type check
  if (typeof number == "number") {
    if (number < 7) {
      return number - 7;
    } else if (number >= 7) {
      return number * 2;
    }
  } else {
    return "Please Valid Data";
  }
}

// find negative number count return
function findingBadData(arrays) {
  // type check
  if (Array.isArray(arrays)) {
    let badData = 0;
    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i] < 0) {
        badData++;
      }
    }
    return badData;
  } else {
    return "Please valid Data";
  }
}

// three friends total gems and
// If total games are more than 2000 then 2000 is subtracted
function gemsToDiamond(friend1, friend2, friend3) {
  // typeof and parameter check
  if (
    typeof friend1 === "number" &&
    typeof friend2 === "number" &&
    typeof friend3 === "number"
  ) {
    const friend1Diamond = 21 * friend1;
    const friend2Diamond = 32 * friend2;
    const friend3Diamond = 43 * friend3;

    let totalDiamonds = friend1Diamond + friend2Diamond + friend3Diamond;

    if (totalDiamonds > 1000 * 2) {
      return totalDiamonds - 2000;
    }

    return totalDiamonds;
  } else {
    return "Please valid Data";
  }
}
