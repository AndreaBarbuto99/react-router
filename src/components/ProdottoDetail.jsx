import { Link } from "react-router-dom";



export default function ProdottoDetail(props) {

    const { image, title, category, description, price } = props.prodotto

    return (
        < div className="only-product container col-4 border-3 border-primary-subtle bg-secondary-subtle mb-4" >
            <figure className="my-figure-detail">
                <img className="img-fluid" src={image} alt={title} />
            </figure>
            <figcaption className="mb-4">
                <h3>{title}</h3>
                <div className="text-end"><i>{category}</i></div>
                <h4>Description</h4>
                <p>{description}</p>
                <span className="text-danger fw-bold">{price} €</span>
            </figcaption>
            <div className="d-flex justify-content-end">
                <Link to="/prodotti" className="btn btn-primary text-end">Torna alla pagina dei prodotti</Link>
            </div>
        </div >
    )
}