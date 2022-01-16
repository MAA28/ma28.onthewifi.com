import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Header from "../../Components/Header/Component";
import sqlite3 from 'sqlite3'

export default function Blog(props) {

    let markdown = null;
    //let db = new sqlite3.Database('./Database.db');

    return (
        <div className="App">
            <Header/>
            <div id="Blog">
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
        </div>
    );
}
