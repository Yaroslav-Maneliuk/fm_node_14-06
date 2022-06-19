const cash = new Map();

export const pow = (n, p) => {
  const key = `${n}**${p}`;
  if (cash.has(key) === false) {
    cash.set(key, n ** p);
  }
  return cash.get(key);
};
export const sum = (a, b) => a + b;
export const mult = (a, b) => a * b;
export const del = (a, b) => a / b;

const secret = 10;
const getSecret = () => secret;

export default getSecret;
