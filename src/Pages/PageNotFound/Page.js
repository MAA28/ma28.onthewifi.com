import Header from "../../Components/Header/Component";

function PageNotFound() {
    console.log('404')
    return (
        <div className="App">
            <Header/>

            <main id="main">
                <h2>404 PageNotFound</h2>
                <p>
                    This website is currently under construction but I'm working hard to get everything running...
                </p>
            </main>
        </div>
    );
}

export default PageNotFound;
