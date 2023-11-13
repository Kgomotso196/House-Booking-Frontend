export const baseUrl = 'https://houseboooking0.onrender.com/';

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
