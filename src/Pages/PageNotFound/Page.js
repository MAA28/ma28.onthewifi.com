import Header from "../../Components/Header/Component";
import { useLocation } from 'react-router-dom'

function PageNotFound() {
    const location = useLocation();

    return (
        <div className="App">
            <Header/>

            <main id="main">
                <h2>404 PageNotFound</h2>
                <p>
                    Sorry, I couldn't find "<b>{location.pathname}</b>". Maybe look somewhere else?
                </p>
            </main>
        </div>
    );
}

export default PageNotFound;
