const isValidURL = (url: string): boolean => {
  // Alphanumeric [0-9a-zA-Z], special characters -_.!*'()
  const pattern = /[^\w-.!*'()]+/gi;
  return url.length === 8 && !pattern.test(url);
};

export { isValidURL };
