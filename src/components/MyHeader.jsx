import { Link, NavLink } from "react-router-dom"


export default function MyHeader() {

    const links = [
        { path: "/", label: "Homepage" },
        { path: "/chisiamo", label: "Chi siamo" },
        { path: "/prodotti", label: "Prodotti" }
    ];

    return (
        <header className="rounded mb-5">
            <nav className="my-nav bg-primary-subtle d-flex justify-content-between align-items-center">
                <Link to="/">
                    <h4 className="ms-3 m-0">React Routing</h4>
                </Link>
                <ul className="my-list d-flex gap-3">
                    {links.map((link, index) => (
                        <li key={index} className="text-dark">
                            <NavLink to={link.path}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <i></i>
            </nav>
        </header>
    )
}