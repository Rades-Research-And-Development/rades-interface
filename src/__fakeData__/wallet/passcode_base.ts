const PASSCODE_BASE = Array.from(Array(9).keys()).map((data, _) => {
  return data + 1;
});
console.log("PASSCODE_BASE", PASSCODE_BASE);
export default PASSCODE_BASE;
