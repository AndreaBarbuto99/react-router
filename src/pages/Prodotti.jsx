import axios from "axios"
import { useState, useEffect } from "react";
import Prodotto from "../components/Prodotto";
import { useBudget } from "../contexts/BudgetProvider";
const endpoint = "https://fakestoreapi.com/products"

export default function Prodotti() {

    const { budgetMode } = useBudget();
    const [products, setProducts] = useState([])
    const budgetProducts = products.filter((product) => product.price <= 30);
    const contxValue = budgetMode ? budgetProducts : products;


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
            <div className="container m-auto p-0 mb-4 row">
                {contxValue.map((product) => (

                    < Prodotto
                        key={product.id}
                        product={product} />


                ))}

            </div >

        </>
    )
}