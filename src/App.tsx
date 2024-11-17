import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import NoPage from "./pages/NoPage";
import { SignInEmail } from './pages/SignInEmail'
import { SignInPassword } from './pages/SignInPassword'
import { FileUpload } from './pages/FileUpload'

function App() {
 
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NoPage />} />
                        <Route path="email" element={<SignInEmail />} />
                        <Route path="password" element={<SignInPassword />} />
                        <Route path="fileUpload" element={<FileUpload/>} />

        </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
