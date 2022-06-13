async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
var logoutButton = document.querySelector('#logout')
if (logoutButton) {
  document.querySelector('#logout').addEventListener('click', logout);
};