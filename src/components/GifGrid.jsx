/* Importaciones de react */

/* Importaciones de terceros */
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

/* Importaciones de funciones que no son propiamente componentes o hooks */

export const GifGrid = ( { categoryProp } ) => {

    const { images, isLoading } = useFetchGifs( categoryProp );
  
    return (
        <>
            <h3>{ categoryProp }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ) )
                }
            </div>   
        </>
    )
}
