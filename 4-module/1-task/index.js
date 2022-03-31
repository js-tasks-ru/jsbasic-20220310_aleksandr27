function makeFriendsList(friends) {
  const body = document.body;
  let newUl = document.createElement('ul');
  
  for (let friend of friends) {
    let newLi = document.createElement('li');
    let friendsName = friend.firstName + " " + friend.lastName;
    newLi.textContent = friendsName;
    newUl.append(newLi);
  }

  body.append(newUl)
  
  return friends
}
