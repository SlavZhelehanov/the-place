import { Route, Routes } from 'react-router';

import './App.css';

import Navigation from "./components/navigation/Navigation";
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';

export default function App() {
    return (
        <>
            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full bg-white">
                <Navigation />
            </div>



            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-slate-100">
                <Routes>
                    <Route index element={<h1>Home</h1>} />
                    <Route path='/auth/register' element={<RegisterForm />} />
                    <Route path='/auth/login' element={<LoginForm />} />
                </Routes>
                <p>Somet text</p>
            </div>
        </>
    )
}