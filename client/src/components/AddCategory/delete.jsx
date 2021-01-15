import React from 'react';
import { useForm } from 'react-hook-form'

const EditCategoryForm = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues:props.currentCategory
    });
    
    setValue('category', props.currentCategory.category);
    setValue('description', props.currentCategory.description);
    

    const onSubmit = (data, e) => {
        console.log('onSubmit pasa', data)
        data.id = props.currentProduct.id;
        props.updateCategory(props.currentCategory.id, data)
        
        //limpiar campos
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label>Categoría</label>
            <input type="text" name="category" ref ={
                register({
                    required: {value: true, message: 'campo requerido'}
                })
            }/>
            <div>
                {errors?.category?.message}
            </div>
            <label>Descripción</label>
            <input type="text" name="description" ref ={
                register({
                    required: {value: true, message: 'campo requerido'}
                })
            }/>
            <div>
                {errors?.description?.message}
            </div>

            <button>Editar categoría</button>
        </form>
    )
}

export default EditCategoryForm;