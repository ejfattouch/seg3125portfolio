import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { Home } from "@/pages/Home.jsx";
import { NotFound } from "@/pages/NotFound.jsx";
import Navbar from "@/components/Navbar.jsx";
import {ComingSoon} from "@/pages/ComingSoon.jsx";
import Footer from "@/components/Footer.jsx";
import StripesContainer from "@/components/StripesContainer.jsx";
import {useEffect} from "react";


function ExternalRedirect({ url }) {
    if (!url) {
        url = "/";
    }
    useEffect(() => {
        window.location.href = url;
    }, []);

    return null;
}

function App() {
    return (
        <div className="bg-white relative min-h-screen antialiased font-proxima font-bold">
            <div className="relative z-10">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='/service-site' element={<ExternalRedirect url={"https://service-web-app-iota.vercel.app/"} />}/>
                        <Route path='/game' element={<ExternalRedirect url={"https://word-seeker-game.vercel.app/"} />}/>
                        <Route path="/commerce" element={<ComingSoon border_color={"border-primary-red"} />} />
                        <Route path="/analytics" element={<ComingSoon border_color={"border-primary-red"} />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <FooterWrapper />
                </Router>
            </div>
        </div>
    );
}

const footerBgColors = {
    "/" : "bg-white",
    "/service-site": "bg-primary-gray",
    "/commerce": "bg-primary-gray",
    "/analytics": "bg-primary-gray",
    "default" : "bg-primary-gray",
}

function FooterWrapper() {
    const location = useLocation();
    let bg_color  = footerBgColors[location.pathname];
    if (!bg_color) {
        bg_color = footerBgColors["default"];
    }

    if (bg_color === footerBgColors["default"] ) {
        return <StripesContainer>
                    <Footer bg_color={bg_color} margin={"mt-0"} />
                </StripesContainer>;
    }
    else {
        return <Footer bg_color={bg_color} />
    }
}

export default App;