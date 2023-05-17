function longestConsec(strarr, k) {
  const n = strarr.length;

  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  let longest = "";

  for (let i = 0; i <= n - k; i++) {
    const current = strarr.slice(i, i + k).join("");
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}



// Ytesgtr

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));
// Output: "folingtrashy"

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));
// Output: "abigailtheta"
