import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";

import MainLayout from './layouts/MainLayout.jsx'
import CourseLayout from './layouts/CoursesLayout.jsx'
import React from "./pages/courses/React.jsx"
import JavaScript from "./pages/courses/JavaScript.jsx"
import HTML from "./pages/courses/HTML"


import "./css/App.css"
function App(){
    return(
        <>
            <Navbar/>

            <Routes>

                <Route element={<MainLayout/>} />
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>

                <Route path="/courses" element={<CourseLayout/>}>
                    <Route path="react" element={<React />} />
                    <Route path="javascript" element={<JavaScript />} />
                    <Route path="html" element={<HTML />} />
                </Route>
                <Route path="*" element={<h1 className="not-found">
                    404 - Page Not Found
                </h1>}/>
            </Routes>
         
        </>
    );
}

export default App;



// Outlet