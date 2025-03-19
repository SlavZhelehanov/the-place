import { Routes, Route } from "react-router";

import './App.css';
import Home from "./components/home/Home";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}