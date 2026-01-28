import { Link, NavLink } from "react-router-dom"


export default function MyHeader() {

    const links = [
        { path: "/", label: "Homepage" },
        { path: "/chisiamo", label: "Chi siamo" },
        { path: "/prodotti", label: "Prodotti" }
    ];

    return (
        <header>
            <nav className="bg-primary-subtle">
                <ul className="d-flex gap-3">
                    {links.map((link, index) => (
                        <li key={index} className="text-dark">
                            <NavLink to={link.path}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}