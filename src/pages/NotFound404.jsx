import { Link } from "react-router-dom"

export default function NotFound404() {
    return (
        <>
            <div>
                <h1>Error:404</h1> <br />
                <h3>Site does not exist</h3>
            </div>
            <div>
                <Link to="/" className="btn btn-primary">Torna alla Homepage</Link>
            </div>
        </>
    )

}