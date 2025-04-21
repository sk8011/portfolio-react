import { useEffect } from "react";
import { Link } from 'react-router-dom';

export const MobileMenu=({menuOpen,setMenuOpen})=>{

    return( 
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen?"h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={()=>{
                setMenuOpen(false)
            }} className="absolute top-4 right-6.5 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
                &times;
            </button>
            <Link to="/" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                        ${menuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`} onClick={()=>{setMenuOpen(false)}}>
                Home
            </Link>
            <Link to="/about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                        ${menuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`} onClick={()=>{setMenuOpen(false)}}>
                About
            </Link>
            <Link to="/projects" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                        ${menuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`} onClick={()=>{setMenuOpen(false)}}>
                Projects
            </Link>
            <Link to="/contact" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                        ${menuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`} onClick={()=>{setMenuOpen(false)}}>
                Contact Me
            </Link>
        </div>
    );
} 