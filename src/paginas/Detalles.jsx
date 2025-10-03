import { useParams } from "react-router-dom"
import { productosOficina } from "../assets/Productos"

export function Detalle() {
    const { id } = useParams()
    const producto = productosOficina.find((p) => p.id === Number(id))

    if (!producto) {
        return <div>Producto no existe</div>
    }

    return (
        <div>
            <h1 id="detalle-tittle">{producto.nombre}</h1>
                  <img  src={producto.imagen} alt={producto.nombre}/>
            <p> {producto.descripcion} </p>
            <p> {producto.precio} </p>
        </div>
    )
}
