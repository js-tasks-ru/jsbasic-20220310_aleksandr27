function makeFriendsList(friends) {
  let newUl = document.createElement('ul');
  
  for (let friend of friends) {
    let newLi = document.createElement('li');
    let friendsName = `${friend.firstName} ${friend.lastName}`;
    newLi.innerHTML = friendsName;
    newUl.appendChild(newLi);
  }
  
  return newUl
}
