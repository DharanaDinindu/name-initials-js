//validate the user input
function validateName(fullName) {
  const valid = /^[a-zA-Z]+(\s{0,1}[a-zA-Z-, ])*$/;

  if (fullName.match(valid)) {
    return fullName;
  }

  throw new Error("Name can only contain letters!");
}

//sperate initials and last name
function getNameWithInitials(fullName) {
  var name;
  var initial;
  var initials = "";
  var lastName;
  var nameWithInit;

  const words = fullName.split(" ");

  for (var i = 0; i < words.length - 1; i++) {
    name = words[i];
    initial = name[0];
    initial = initial.toUpperCase();
    initials = initials + initial + ". ";
  }

  lastName = words[words.length - 1];
  nameWithInit = initials + lastName;
  return nameWithInit;
}

//print the result
function printResult(nameWithInit) {
  console.log("Name with initials: " + nameWithInit);
}

export { validateName, getNameWithInitials, printResult };