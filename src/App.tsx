import { useState } from "react";
import "./App.css";
import { Graph } from "./widgets/Graph";
import { Sidebar } from "./widgets/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import NoPage from "./pages/NoPage";
import { SignInEmail } from './pages/SignInEmail'
import { SignInPassword } from './pages/SignInPassword'

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NoPage />} />
                      <Route path="a" element={<SignInEmail />} />
          <Route path="b" element={<SignInPassword />} />
        </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
