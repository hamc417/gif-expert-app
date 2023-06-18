
import { GifItem} from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

const { images, isLoading} = useFetchGifs(category);

console.log({isLoading})
 
  return (
    <>
      <h3> {category}</h3>

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
