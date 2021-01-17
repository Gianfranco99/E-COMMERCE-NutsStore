const newPassword = (data) =>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
console.log(data.password)
var raw = JSON.stringify({"password":data.password,"email":data.email});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3001/user", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
module.exports= newPassword;