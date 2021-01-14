import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getUsers} from "../../redux/actions/actions"


export default function Users (){
   const dispatch = useDispatch()
   const users = useSelector(state => state.users)

useEffect(()=>{
    dispatch(getUsers())
},[])
var nombre = users[0];
console.log(nombre)

return (
    <div>
        <h1>hola</h1>
    </div>,
    <div>
<h1>holaaaaaaaaaaaaa</h1>
    </div>
)





}