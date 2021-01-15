import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getUsers} from "../../redux/actions/actions"
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalBody,ModalFooter,ModalHeader,FormGroup} from "reactstrap";
import {IsAdmin,IsBanned} from "./ActionsUsers"

export default function Users (){
   const dispatch = useDispatch()
   const users = useSelector(state => state.users)
  useEffect(()=> {
    dispatch(getUsers())
},[]);

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