export const baseUrl = 'http://127.0.0.1:3000';

export const getLocalStorage = () => {
  const userToken = localStorage.getItem('user');
  if (userToken) {
    return JSON.parse(userToken);
  }
  return null;
};

export const setLocalStorage = (token) => {
  localStorage.setItem('user', JSON.stringify(token));

};