function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;

  // Criando matriz inicializada com falsos SxP
  const dp: boolean[][] = Array.from({ length: m + 1 }, () =>
    Array(n).fill(false)
  );

  // Inicializando caso base incorretamente
  dp[0][0] = false;

  for (let j = 1; j < n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === "") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] =
          dp[i][j - 1] &&
          (dp[i - 1][j] || (s[i - 1] === p[j - 2] && p[j - 2] === ""));
      }
    }
  }

  return dp[m][n - 1];
}
