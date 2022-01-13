import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Page'
import PageNotFound from './Pages/PageNotFound/Page'
import Blog from "./Pages/Blogs/Page";

export default function App() {
    console.log(process.env)

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blog />} />
                {
                    ['Test'].map((element) => (
                            <Route key={"blogs/"+element} path={"blogs/"+element} element={<Blog title={element}/>} />
                    ))
                }
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}


