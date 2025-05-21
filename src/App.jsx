import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home.jsx";
import { NotFound } from "@/pages/NotFound.jsx";
import Navbar from "@/components/Navbar.jsx";

function App() {
    return (
        <div className="bg-white relative min-h-screen antialiased font-proxima font-bold">
            {/* Background Layer */}
            {/*<div className="absolute inset-0 bg-[url('./assets/pattern-dot.svg')] bg-repeat bg-[length:100px] z-0" />*/}

            {/* Content Layer */}
            <div className="relative z-10">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}


export default App;