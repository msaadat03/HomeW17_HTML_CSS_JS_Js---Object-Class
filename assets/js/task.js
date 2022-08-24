let word = "Salam olsun hamiya";

function checking(string) {
  let result = string.split(" ").map((m) => m.length);
  return result;
}
console.log(checking(word));
