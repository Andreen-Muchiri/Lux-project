import "./Navbar.css";
export default function Navbar() {
    return <nav className = "nav">
        < a href = "/" className="site-title">Lux-Hotels</a>
        <ul>
            <li className="active">
                <a href = "/">Home</a>
                </li>
                <li>
                <a href = "/about">About</a>
                </li>
                <li>
                <a href = "/room">Room</a>
                </li>

                <li>
                <a href = "/contact">Contact Us</a>
            </li>
        </ul>
    </nav>
}