import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/media-query.css'
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from "./pages/Home4";
import ScrollAnimations from "./component/scrollAnimation/ScrollAnimations";
import About from "./pages/About";
import BottomToTopButton from "./component/BottomToTopButton";
// import CustomCursor from "./component/CustomCursor";
import Header from "./component/header/Header";
import Footer from "./component/Footer";

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                {/* <CustomCursor /> */}
                <ScrollAnimations />
                <Header />
                <Routes>
                    <Route path="/" element={<Home1 />} />
                    <Route path="/home2" element={<Home2 />} />
                    <Route path="/home3" element={<Home3 />} />
                    <Route path="/home4" element={<Home4 />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
                <BottomToTopButton />
            </BrowserRouter>

        </>
    )
}

export default App
