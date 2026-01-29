import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ProdottoDetail from "../components/ProdottoDetail";

const endpointFirst = "https://fakestoreapi.com/products/"


export default function ProdottoDetailPage() {

    const { id } = useParams();
    const [prodotto, setProdotto] = useState([]);

    useEffect(() => {
        axios.get(endpointFirst + id)
            .then((res) => setProdotto(res.data))
            .catch((err) => console.error("La richiesta non è andata a buon fine", err))
    }, [])


    return (
        <>
            <h3 className="detail-title text-center">Prodotto in dettaglio:</h3>
            <ProdottoDetail
                key={prodotto.id}
                prodotto={prodotto} />
        </>
    )
}