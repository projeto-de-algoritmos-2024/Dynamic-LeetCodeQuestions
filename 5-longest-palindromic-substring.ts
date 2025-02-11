function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  let start = 0,
    maxLength = 1;

  function expandAroundCenter(left: number, right: number): void {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    const length = right - left - 1;
    if (length > maxLength) {
      start = left + 1;
      maxLength = length;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
}
