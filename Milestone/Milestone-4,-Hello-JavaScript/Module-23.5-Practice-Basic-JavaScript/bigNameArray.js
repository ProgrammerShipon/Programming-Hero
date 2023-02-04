/**
 *    Problem - 5
 *  only big name
 * ['Sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku']
 * bestFriend()
 */

const frieds = [
  "Sajid",
  "mamun",
  "kamal uddin salam hossain",
  "jubayer bin rased",
  "chinku",
];

function bestFriend(friends) {
  let friendLength = 0;
  let friendName;
  for (let friend of friends) {
    if (friendLength < friend.length) {
      friendLength = friend.length;
      friendName = friend;
    }
  }

  const nameLength = "length : " + friendLength + " --> " + friendName;
  return nameLength;
}

console.log(bestFriend(frieds))
