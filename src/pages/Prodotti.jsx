import axios from "axios"
import { useState } from "react";
const endpoint = "https://fakestoreapi.com/products"

export default function Prodotti() {

    const [products, setProducts] = useState([])

    axios.get(endpoint)
        .then(
            (res) => {
                setProducts(res.data)
            }
        )
        .catch(
            console.error("Non è stato possibile eseguire la richiesta")
        )

    return (
        <>
            <div className="container row">
                {products.map((product) => (
                    <div key={product.id} className="card col-4">
                        <figure>
                            <img className="img-fluid" src={product.image} alt={product.title} />
                        </figure>
                        <figcaption>
                            <h2>{product.title}</h2>
                            <span><i>{product.category}</i></span>
                            <h4>Description</h4>
                            <p>{product.description}</p>
                            <span className="text-danger fw-bold">{product.price}</span>
                        </figcaption>
                    </div>

                ))}
            </div >

        </>
    )
}