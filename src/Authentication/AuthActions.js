export function authenticaUser(username, password) {
  return {
    type: 'AUTH_USER',
    username,
    password
  };
}
