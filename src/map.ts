function map<T, U>(arr: T[], cb: (val: T) => U): U[] {
  const outputArr = [];
  for (const ele of arr) {
    outputArr.push(cb(ele));
  }

  return outputArr;
}

export default map;
