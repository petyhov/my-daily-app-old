export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? JSON.parse(matches[1]) : {};
};

export const setCookie = (name, value) => {
  document.cookie = `${name}=${JSON.stringify(value)}`;
};
