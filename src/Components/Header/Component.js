import SkipToContent from "../SkipToContent/Component";
import Navbar from "../Navbar/Component";
import './style.css'

function Header() {
    return (
        <header>
            <SkipToContent/>
            <h1>ma28.onthewifi.com</h1>
            <Navbar/>
        </header>
    )
}

export default Header