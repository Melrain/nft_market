// make a function that takes length as an argument and returns a random string of that length

export const makeId = (length) => {
  let result = '';
  // eslint-disable-next-line operator-linebreak
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
