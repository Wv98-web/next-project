import request from '../request/request';

function login({ username, password }) {
  return request.get('/login.php', { params: { username, password } });
}

export default login;
