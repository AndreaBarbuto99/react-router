import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import ProdottoDetail from "../components/ProdottoDetail";


const endpointFirst = "https://fakestoreapi.com/products/"


export default function ProdottoDetailPage() {

    const { id } = useParams();
    const [prodotto, setProdotto] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(endpointFirst + id)
            .then((res) => setProdotto(res.data))
            .catch((err) => {
                console.error("La richiesta non è andata a buon fine", err)
                navigate("/notfound")
            })
    }, [])

    if (!prodotto || !prodotto.id) {
        navigate("/notfound");
        return <div>Loading...</div>;
    }



    return (
        <>
            <h3 className="detail-title text-center">Prodotto in dettaglio:</h3>
            <ProdottoDetail
                key={prodotto.id}
                prodotto={prodotto} />

        </>
    )
}