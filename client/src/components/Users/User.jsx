import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/actions"
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from "reactstrap";
import { IsAdmin, IsBanned, resetPassword } from "./ActionsUsers"
import styleUser from "./User.css"
export default function Users() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    useEffect(() => {
        dispatch(getUsers())
    });

    return (
        <div className="user">
            <Container>
                <h1>Table of User</h1>


                <Table className="user">
                    <thead><tr><th>id</th>
                        <th>Nombre</th>
                        <th>email</th>
                        <th>Admin</th>
                        <th>Permisos</th>
                        <th>Acciones</th>
                        <th>Reset</th>


                    </tr></thead>
                    <tbody>
                        {users.map(u => (
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.isAdmin ? "Admin" : "Guest"}</td>
                                <td><Button color="primary" onClick={() => IsAdmin(u)}>cambiar</Button></td>
                                {"  "}
                                {
                                    u.isBanned ?
                                        <td><Button color="danger" onClick={() => IsBanned(u)} >Desbanear</Button></td>
                                        :
                                        <td><Button color="danger" onClick={() => IsBanned(u)} >Banear</Button></td>
                                }
                                <td><Button color="primary" onClick={() => resetPassword(u)}>Password</Button></td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
            </Container>
        </div>
    );
};