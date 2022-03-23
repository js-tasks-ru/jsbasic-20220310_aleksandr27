let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 22,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1,490.15",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

function showSalary(users, age) {
  
  let ageUsers = users.filter((user) => {
    return user.age <= age
  });
  
  let names = ageUsers.map((user) => {
    let str = "\n"
    return `${user.name}, ${user.balance} ${str}`;
  });
  
  return names.join("").slice(0, -2)
  
}

let users = [user1, user2]

let result = showSalary(users, 30);

console.log(result)
