import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";
import "./css/App.css"
function App(){
    return(
        <>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/courses" element={<Courses />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<h1 className="not-found">
                    404 - Page Not Found
                </h1>}/>
            </Routes>
        </>
    );
}

export default App;