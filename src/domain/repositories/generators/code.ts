export function codeGenerator(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-";
  let code = "";
  for (let i = 0; i < 9; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return code;
}
