import SkipToContent from "../SkipToContent/Component";
import Navbar from "../Navbar/Component";
import './style.css'

function Header() {
    return (
        <header>
            <SkipToContent/>
            <h1><a href="/">ma28.onthewifi.com</a></h1>
            <Navbar/>
        </header>
    )
}

export default Header