import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Header from "../../Components/Header/Component";
import 


export default function Blog(props) {

    let markdown = null;




    return (
        <div className="App">
            <Header/>
            <div id="Blog">
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
        </div>
    );
}
