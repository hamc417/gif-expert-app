import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const[categories, setCategories] = useState(['One Punch']);

    

    const onAddCategory = (newCategory) =>{
      if(categories.includes(newCategory)) return; //si en las categorias existentes ya esta, no inserta
        // setCategories([...categories],'Valorant')
        // setCategories( cat => [...cat, 'Valorant'])
        setCategories([newCategory, ...categories]) //si se requiere al inicio solo se intercambia el nuevo parametro al inicio
        
    }

  return (
    <>
    
    <h1> GifExpertApp </h1>

   
    <AddCategory 
                onNewCategory={(value)=>onAddCategory(value)}
    // setCategories={setCategories}
    
    />
   
    
    {
    categories.map((category) =>(
    <GifGrid key={category} category={category}/>

        ))
    }
        
    
    </>
  )
}
