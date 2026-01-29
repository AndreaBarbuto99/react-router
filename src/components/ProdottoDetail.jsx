import { Link } from "react-router-dom";



export default function ProdottoDetail(props) {

    const { image, title, category, description, price } = props.prodotto

    return (
        < div className="container col-4" >
            <figure>
                <img className="img-fluid" src={image} alt={title} />
            </figure>
            <figcaption>
                <div className="text-end"><i>{category}</i></div>
                <h4>Description</h4>
                <p>{description}</p>
                <span className="text-danger fw-bold">{price}</span>
            </figcaption>

            <Link to="/prodotti" className="btn btn-primary">Torna alla pagina dei prodotti</Link>
        </div >
    )
}