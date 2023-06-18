
import { GifItem} from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

const { images, isLoading} = useFetchGifs(category);

console.log({isLoading})
 
  return (
    <>
      <h3> {category}</h3>
      {
        isLoading && (<h2>Cargando</h2>) //if corto si isLoading es true ejecuta lo que sigue sino regresa
      }

      {/* {
        isLoading
        ? (<h2>Cargando...</h2>)     //si es true muestra el h2
        : null                    //si es false no muestra nada(null no renderiza nada)
      } */}

      <div className='card-grid'>

        {
          images.map( ( image )  => (
            <GifItem 
            key={image.id}
            // title={image.title}
            // url={image.url}

            {...image} // De esta forma se envian absolutamente todas las propiedades
            />
            ))
        }
      
      </div>
    </>

  )
}
