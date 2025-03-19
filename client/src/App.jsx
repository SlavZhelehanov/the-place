import { Routes, Route } from "react-router";

import './App.css';
import Home from "./components/home/Home";
import PageNotFound from "./components/404/PageNotFound";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}