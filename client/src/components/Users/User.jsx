import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getUsers} from "../../redux/actions/actions"
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalBody,ModalFooter,ModalHeader,FormGroup} from "reactstrap";
import {IsAdmin} from "./IsAdmin"

export default function Users (){
   const dispatch = useDispatch()
   const users = useSelector(state => state.users)
  useEffect(()=> {
    dispatch(getUsers())
},[]);

const IsBanned = (u)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    var banned = JSON.stringify ({"isBanned" :u.isBanned ? false: true})
    var userId = u.id
    console.log(banned)
    console.log(userId)

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body:  banned,
      redirect: 'follow'
    };
    
    
    fetch(`http://localhost:3001/user/${userId}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("aa",result))
      .catch(error => console.log('error', error));
    
}


return (
    
    <Container>
        <br/>
    <Button color="primary">X</Button>
    <br /><br />


    <Table>
<thead><tr><th>id</th> 
    <th>Nombre</th>
    <th>email</th>
    <th>Admin</th>
    <th>Acciones</th>

</tr></thead>
<tbody>
    {users.map(u => (
        <tr>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.isAdmin ? "Admin" : "Guest"}</td>
            <td><Button color="primary" onClick={ ()=> IsAdmin(u)}>cambiar</Button></td>{"  "}
            <td><Button color="danger" onClick={()=>IsBanned(u) } >banear</Button></td>
            <td><Button color="primary">Password</Button></td>
        </tr>
    ))}


</tbody>
    </Table>
    </Container>
)





}