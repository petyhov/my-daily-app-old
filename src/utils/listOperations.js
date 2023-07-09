export const transformDataForList = (item, cells) => {
  const values = cells.map((cell) => {
    if (cell.resName === 'date') {
      return {
        value: item[cell.resName],
        type: cell.resName,
      };
    }
    return {
      value: item[cell.resName],
    };
  });

  return {
    colorStatus: item.checkAnswer,
    values,
  };
};

export const transformHeadersName = (arr) => {
  return arr.map((item) => item.name);
};
