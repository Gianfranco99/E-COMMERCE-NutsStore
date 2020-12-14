import React, {useState} from 'react';
import { useForm } from 'react-hook-form'


const AddProductForm = (props) => {
    //categories desplegable
    const [CategorySelected, setCategorySelected] = useState('TODOS');

    const selectedChange = (e) => {
    let value = e.target.value
    setCategorySelected (value)
    }

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        
        props.addProduct(data)
        //limpiar campos
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Producto</label>
            <input type="text" name="name" ref ={
                register({
                    required: {value: true, message: 'campo requerido'}
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Description</label>
            <input type="text" name="description" ref ={
                register({
                    required: {value: true, message: 'campo requerido'}
                })
            }/>
            <div>
                {errors?.description?.message}
            </div>
            <label>Price</label>
            <input type="text" name="price" ref ={
                register({
                    required: {value: true, message: 'campo requerido'}
                })
            }/>
            <div>
                {errors?.price?.message}
            </div>
            <label>Stock</label>
            <input type="text" name="stock" ref ={
                register({
                    required: {value: true, message: 'campo requerido'}
                })
            }/>
            <div>
                {errors?.stock?.message}
            </div>
            <label>Category</label>
            {/* <input type="text" name="category" ref ={
                register({
                    required: {value: true, message: 'campo requerido'}
                })
            }/> */}
            <select value={CategorySelected} onChange={selectedChange}>  
                <option value="TODOS">TODOS</option>          
                <option value="frutos secos">frutos secos</option>
                <option value="castañas de caju">castañas de caju</option>
                <option value="nueces">nueces</option>
                <option value="harinas">harinas</option>
            </select>
            

            <button>New product</button>
        </form>
    )
}

export default AddProductForm;