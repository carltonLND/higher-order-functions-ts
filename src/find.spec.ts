import find from "./find";

test("find returns the correct number in a number array", () => {
  const testFn = (num: number) => {
    if (num === 3) {
      return true;
    }

    return false;
  }
  const testArr = [2, 5, 6, 3]
  expect(find(testArr, testFn)).toBe(3);
});


test("find returns undfined if cannot find the correct number in a number array", () => {
  const testFn = (num: number) => {
    if (num === 3) {
      return true;
    }

    return false;
  }
  const testArr = [2, 5, 6]
  expect(find(testArr, testFn)).toBe(undefined);
});

test("find returns the correct string in a string array", () => {
  const testFn = (str: string) => {
    if (str === "banana") {
      return true;
    }

    return false;
  }
  const testArr = ["hello", "there", "friendly", "banana"]
  expect(find(testArr, testFn)).toBe("banana");
});


test("find returns the correct string in a string array", () => {
  const madridExists = (city: string) => {
    city = city.toLowerCase()
    if (city === "madrid") {
      return true;
    }

    return false;
  }
  const cityArray = ["London", "New York", "Madrid", "Cardiff"]

  expect(find(cityArray, madridExists)).toBe("Madrid");
});