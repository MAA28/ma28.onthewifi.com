import Header from "../../Components/Header/Component";
import './Page.css'

export default function AboutMe () {
    return (
        <div className="App">
            <Header/>
            <article id="main">
                <section>
                    <h2>
                        Hi, ich Malte A. Aschenbach!
                    </h2>
                    <p>Ich bin ein Schüler des Hainberg Gymnasiums, spiele gerne Handball und interessiere mich für Naturwissenschaften und Informatik.</p>
                </section>
                <section>
                    <h2>
                        Portfolio
                    </h2>
                    <p>
                        Eine vollstandige Sammlung meiner Arbeiten findet ihr auf meinem <a href="https://www.github.com/MAA28">GitHub</a> aber hier ein paar moderierte Meisterwerke:
                        <ul>
                            <li>
                                <a href="https://github.com/MAA28/ma28.onthewifi.com">
                                    This Website
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/MAA28/Chess">
                                    My Chess CLI
                                </a>
                            </li>
                        </ul>
                    </p>
                </section>
            </article>
        </div>
    )
}