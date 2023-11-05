export const baseUrl = 'http://127.0.0.1:3000';

export const getLocalStorate = () => {
  console.log('Get the local storage');
};

export const setLocalStorage = (user) => {
  console.log(user);
  localStorage.setItem('user', JSON.stringify(user));
};
