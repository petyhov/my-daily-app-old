export const setCookie = (name, value) => {
  document.cookie = `${name}=${JSON.stringify(value)}`;
};
