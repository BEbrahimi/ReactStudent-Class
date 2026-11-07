import { NavLink } from "react-router";
export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">TechLearn</div>
            <div className="nav-links">
                <NavLink to="/" end> Home </NavLink>
                <NavLink to="/about"> About </NavLink>
                <NavLink to="/courses"> Courses </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
            </div>
        </nav>
    );
}