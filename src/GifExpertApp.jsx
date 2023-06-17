import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const[categories, setCategories] = useState(['One Punch', 'Dragon ball']);

    console.log(categories)

    const onAddCategory = (newCategory) =>{
      if(categories.includes(newCategory)) return; //si en las categorias existentes ya esta, no inserta
        // setCategories([...categories],'Valorant')
        // setCategories( cat => [...cat, 'Valorant'])
        setCategories([...categories, newCategory]) //si se requiere al inicio solo se intercambia el nuevo parametro al inicio
        console.log({newCategory})
    }

  return (
    <>
    {/* titulo */}
    <h1> GifExpertApp </h1>

    {/* input */}
    <AddCategory 
                onNewCategory={(value)=>onAddCategory(value)}
    // setCategories={setCategories}
    
    />
    {/* Listado de gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>{categories.map(category =>{
        return (
            <li key={category}>{category}</li>
        )
    })}
        
    </ol>
    </>
  )
}
