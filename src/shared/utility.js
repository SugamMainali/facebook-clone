export const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.isRequired) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  return isValid;
};
