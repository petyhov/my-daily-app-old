export const saveToLocalStorage = (itemName, data, update = false) => {
  if (update) {
    return console.log('update');
  }
  localStorage.setItem(itemName, JSON.stringify(data));
};

export const getDataFromLocalStorage = (name) => {
  const data = localStorage.getItem(name);
  return JSON.parse(data);
};
