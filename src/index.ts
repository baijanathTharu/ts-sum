export const sum = (...numbers: number[]) => {
  let temp = 0;

  for (const num of numbers) {
    temp += num;
  }

  return temp;
};
