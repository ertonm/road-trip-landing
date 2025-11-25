import "../styles/Header.scss";
import bus from "../images/bus.png";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/articles">Article</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>

            <div className="header-content">
                <h1>The Roam Report</h1>
                <img src={bus} alt="bus illustration" />
                <p>Stories and photos of long walks, wrong turns and everyday discoveries!</p>
            </div>


            <div className="locations-list">
                <p>🌍 Paris, France 🌍 Tokyo, Japan 🌍 New York, USA 🌍 London, UK 🌍 Rome, Italy 🌍 Sydney, Australia 🌍 Berlin, Germany 🌍 Rio de Janeiro, Brazil 🌍 Cairo, Egypt 🌍 Beijing, China 🌍 Paris, France 🌍 Tokyo, Japan 🌍 New York, USA 🌍 London, UK 🌍 Rome, Italy 🌍 Sydney, Australia 🌍 Berlin, Germany 🌍 Rio de Janeiro, Brazil 🌍 Cairo, Egypt 🌍 Beijing, China</p>
            </div>

        </header>
    );
}

export default Header;