import React from 'react';
import style from './Admin.module.css'

export default function  FormCategorie() {
    const [input, setInput] = React.useState({
        name: '',
        description: '',
    });

    const handleInputChange = function(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    
    return (
        <form>
            <div className={style.container}>
                <div>
                    <h2>Category: </h2>
                    <input type="text" name="name" value={input.name} onChange = {handleInputChange}/>
                </div>
            </div>
            <div className={style.container}>
                <h2>Description: </h2>
                <input type="text" name="description" value={input.description} onChange = {handleInputChange}/>
            </div>
            <input type="submit" value="submit"/>
        </form>
    )
  }