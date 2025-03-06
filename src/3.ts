function getRandomTSCode(): string {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
    result += numbers[Math.floor(Math.random() * numbers.length)];
  }
  return result;
}
