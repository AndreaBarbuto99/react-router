import { Link } from "react-router-dom"


export default function Prodotto({ product }) {

    const { title, price, description, category, image } = product

    return (

        < div className="card col-4" >
            <figure>
                <img className="img-fluid" src={image} alt={title} />
            </figure>
            <figcaption>
                <Link to="/chisiamo"> <h2>{title}</h2> </Link>
                <span><i>{category}</i></span>
                <h4>Description</h4>
                <p>{description}</p>
                <span className="text-danger fw-bold">{price}</span>
            </figcaption>
        </div >
    )
}