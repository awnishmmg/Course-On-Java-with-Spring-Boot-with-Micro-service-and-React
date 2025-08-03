import user_data from "../data/user.json";

//helpers functions or utility
function is_valid(id) {
  let i = 0;
  for (i; i < user_data.users.length; i++) {
    if (user_data.users[i].id == id) {
      return true;
    }
  }
  return false;
}

function getUserData(id) {
  let i = 0;
  for (i; i < user_data.users.length; i++) {
    if (user_data.users[i].id == id) {
      return user_data.users[i];
    }
  }
  return {};
}

export { is_valid, getUserData };
