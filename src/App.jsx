import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home.jsx";
import { NotFound } from "@/pages/NotFound.jsx";
import Navbar from "@/components/Navbar.jsx";

function App() {
    return (
        <div className="min-h-screen bg-[url('./assets/popsicle.jpg')] bg-cover bg-center bg-no-repeat">
            <Router>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;