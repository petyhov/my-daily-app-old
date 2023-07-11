export const increaseWithinTen = (number) => {
  if (number === 9) {
    return 0;
  }
  return number + 1;
};

export const decreaseWithinTen = (number) => {
  if (number === 0) {
    return 9;
  }
  return number - 1;
};
