import { Link, NavLink } from "react-router-dom"


export default function MyHeader() {

    const links = [
        { path: "/", label: "Homepage" },
        { path: "/chisiamo", label: "Chi siamo" },
        { path: "/prodotti", label: "Prodotti" }
    ];

    return (
        <header>
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
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