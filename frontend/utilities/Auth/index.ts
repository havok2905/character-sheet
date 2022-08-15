const deleteCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

const getCookie = (cookieName: string) => {
  const cookieDecoded = decodeURIComponent(document.cookie);
  const cookieParts = cookieDecoded.split('; ');
  const name = `${cookieName}=`;

  let response = '';

  cookieParts.forEach(value => {
    if (value.indexOf(name) === 0) {
      response = value.substring(name.length);
    }
  });
  
  return response;
};

const setCookie = (cookieName: string, value: string, expirationDays: number) => {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  document.cookie = `${cookieName}=${value}; expires=${date.toUTCString()}; path=/`;
};

const AUTHORIZATION_COOKIE = 'character-sheet-authorization';

const clearToken = () => {
  deleteCookie(AUTHORIZATION_COOKIE);
};

const getToken = (): string => {
  return getCookie(AUTHORIZATION_COOKIE) ?? '';
};

const setToken = (token: string) => {
  setCookie(AUTHORIZATION_COOKIE, token, 30);
};

export {
  clearToken,
  getToken,
  setToken
};