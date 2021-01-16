export const IsAdmin = (u) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var admin = JSON.stringify({ "isAdmin": u.isAdmin ? false : true })
  var userId = u.id

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: admin,
    redirect: 'follow'
  };

  fetch(`http://localhost:3001/user/${userId}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log("aa", result))
    .catch(error => console.log('error', error));
};

export const IsBanned = (u) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var banned = JSON.stringify({ "isBanned": u.isBanned ? false : true })
  var userId = u.id
  console.log(banned)
  console.log(userId)

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: banned,
    redirect: 'follow'
  };

  fetch(`http://localhost:3001/user/${userId}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log("aa", result))
    .catch(error => console.log('error', error));
};

export const resetPassword = (u) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var userId = u.id;

  var password = JSON.stringify({ "password": "" });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: password,
    redirect: 'follow'
  };
  console.log(userId);
  fetch(`http://localhost:3001/user/${userId}/password-reset`, requestOptions)
    .then(response => {
      console.log('ruta');
      response.text()
    })
    .then(result => console.log("success", result))
    .catch(error => console.log('failure', error));
};