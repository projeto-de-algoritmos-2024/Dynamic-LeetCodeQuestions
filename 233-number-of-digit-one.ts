function countDigitOne(n: number): number {
  let count = 0;

  for (let i = 1; i <= n; i *= 10) {
    let divider = i * 10;

    count +=
      Math.floor(n / divider) * i +
      Math.min(Math.max((n % divider) - i + 1, 0), i);
  }

  return count;
}
