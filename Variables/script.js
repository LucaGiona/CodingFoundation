let  userName = "Brad"; userName = "Jenna";

function getUserNameLength (Name){
 return  Name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true

// TODO: Implement the isString function

function isString(value){
return typeof value === "string"
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true