function find<T>(inputArray: T[], predicateFn: (element: T) => boolean): T | undefined {
  for (const element of inputArray) {
    if (predicateFn(element)) {
      return element
    }
  }

  return;
}


// test("find returns the correct string in a string array", () => {
//   function madridExists(city: string): boolean {
//     city = city.toLowerCase()
//     if (city === "madrid") {
//       return true;
//     }

//     return false;
//   }
//   const cityArray = ["London", "New York", "Madrid", "Cardiff"]

//   expect(find(cityArray, madridExists)).toBe("Madrid");
// });


function madridExists(city: string): boolean {
  city = city.toLowerCase()
  if (city === "madrid") {
    return true;
  }

  return false;
}

const cityArray = ["London", "New York", "Madrid", "Cardiff"]

const cityFound = find(cityArray, madridExists);

if (cityFound) {
  console.log("WE FOUND THE CITY: ", cityFound)
} else {
  console.log("THAT CITY ISN'T AVAILABLE YET")
}

export default find;
