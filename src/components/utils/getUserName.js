function getUsername() {
  // getting stored state
  const temp = localStorage.getItem('username');
  const savedUsername = JSON.parse(temp);
  return savedUsername || '';
}

export default getUsername;
