import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Page'
import PageNotFound from './Pages/PageNotFound/Page'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}


