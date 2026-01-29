import { Link } from "react-router-dom"


export default function Prodotto({ product }) {

    const { title, price, description, category, image, id } = product

    return (

        < div className="card border border-3 border-primary-subtle col-4 bg-secondary-subtle" >
            <figure className="my-figure">
                <img className="img-fluid" src={image} alt={title} />
            </figure>
            <figcaption>
                <Link to={`/prodotti/${id}`}> <h2>{title}</h2> </Link>
                <div className="text-end"><i>{category}</i></div>
                <h4>Description</h4>
                <p>{description}</p>
                <span className="text-danger fw-bold">{price} €</span>
            </figcaption>
        </div >
    )
}