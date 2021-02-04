var fullName = getFullName();
console.log(fullName);
// var nameWithInit = getNameWithInitials(fullName);
// printResult(nameWithInit);

//read user input
function getFullName() {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter fullname: ",

    (fullName) => {
      var valid = /^[a-zA-Z]+(\s{0,1}[a-zA-Z-, ])*$/;

      if (fullName.match(valid)) {
        return fullName;
      } else {
        console.log("Name can onlt contain letters!");
      }

      rl.close();
    }
  );
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
