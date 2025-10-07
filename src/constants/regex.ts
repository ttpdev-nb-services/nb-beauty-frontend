export const PATTERN = {
  email:
    /^(?=.{1,150}$)(?=[^@]{3,40}@)[A-Za-z](?:[A-Za-z0-9_%+-]|\.(?!\.|@)){3,50}@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,50}[A-Za-z0-9])?\.)+[A-Za-z]{2,10}$/,
};

export const REPLACE_REGEX = {
  price: /\D/g,
};
