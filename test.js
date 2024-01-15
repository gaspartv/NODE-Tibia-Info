function test(firstName) {
  const regex = /^[a-zA-Z]+$/;
  if (regex.test(firstName)) {
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  }
}

console.log(test("diego"));
