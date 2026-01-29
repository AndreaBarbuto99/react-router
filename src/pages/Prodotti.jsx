import axios from "axios"
import { useState, useEffect } from "react";
import Prodotto from "../components/Prodotto";
const endpoint = "https://fakestoreapi.com/products"

export default function Prodotti() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(endpoint)
            .then(
                (res) => {
                    setProducts(res.data)
                }
            )
            .catch(
                (err) => console.error("Non è stato possibile eseguire la richiesta", err)
            )
    }, [])

    return (
        <>
            <div className="container row">
                {products.map((product) => (

                    < Prodotto
                        key={product.id}
                        product={product} />


                ))}

            </div >

        </>
    )
}