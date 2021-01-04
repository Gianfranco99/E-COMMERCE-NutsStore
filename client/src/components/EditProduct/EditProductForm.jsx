import React from 'react';
import { useForm } from 'react-hook-form'

const EditProductForm = (props) => {

    console.log(props.currentProduct)

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues:props.currentProduct
    });
    
    setValue('name', props.currentProduct.name);
    setValue('description', props.currentProduct.description);
    setValue('price', props.currentProduct.price);
    setValue('stock', props.currentProduct.stock);
    setValue('category', props.currentProduct.category);

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentProduct.id;
        props.updateProduct(props.currentProduct.id, data)
        
        //limpiar campos
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
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
            <input type="text" name="category" ref ={
                register({
                    required: {value: true, message: 'campo requerido'}
                })
            }/>
            <div>
                {errors?.stock?.message}
            </div>

            <button>Edit product</button>
        </form>
    )
}

export default EditProductForm;