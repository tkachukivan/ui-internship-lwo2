export function myReplace(str, before, after) {
  const index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}
