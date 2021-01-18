import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/actions"
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from "reactstrap";
import { IsAdmin, IsBanned, resetPassword } from "./ActionsUsers"
import styleUser from "./User.css"
export default function Users(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    useEffect(() => {
        dispatch(getUsers())
    });

    const {
        buttonLabel,
        className
      } = props;
    const [modalAdmin, setModalAdmin] = useState(false);
    const [modalBan, setModalBan] = useState(false);
    const [modalPass, setModalPass] = useState(false)



    const toggle = () => setModalAdmin(!modalAdmin);
    const toggle1 = () => setModalBan(!modalBan);
    const toggle2 = () => setModalPass(!modalPass);
    
    
    const Admin = (u) => {
          IsAdmin(u);
          toggle();
        //   window.location.replace("/user");
      }

    const ban = (u) => {
        IsBanned(u);
        toggle1()
    }

    const pass = (u) => {
        resetPassword(u);
        toggle2()
    }
    


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
                                <td><Button color="primary" onClick={() => Admin(u)}>cambiar</Button></td>
                                {"  "}
                                {
                                    u.isBanned ?
                                        <td><Button color="danger" onClick={() => ban(u)} >Desbanear</Button></td>
                                        :
                                        <td><Button color="danger" onClick={() => ban(u)} >Banear</Button></td>
                                }
                                <td><Button color="primary" onClick={() => pass(u)}>Password</Button></td>
                            </tr>
                        ))}
                        <Modal isOpen={modalAdmin} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Permisos</ModalHeader>
                            <ModalBody>
                                Ahora tiene permisos de administrador.
                            </ModalBody>
                            <ModalFooter>
                            
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={modalBan} toggle={toggle1} className={className}>
                            <ModalHeader toggle={toggle1}>Acciones</ModalHeader>
                            <ModalBody>
                                Usuario banned.
                            </ModalBody>
                            <ModalFooter>
                            
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={modalPass} toggle={toggle2} className={className}>
                            <ModalHeader toggle={toggle2}>Reset</ModalHeader>
                            <ModalBody>
                                Reset Password.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle2}>ok</Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};