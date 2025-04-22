import { useEffect } from "react";
import { Link } from 'react-router-dom';

export const Navbar=({menuOpen,setMenuOpen})=>{
    useEffect(()=>{
        document.body.style.overflow= menuOpen?"hidden":""

    })

    return (
    <nav className="fixed top-0 w-full z-40 bg-gray-600 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <Link to="/" className="font-mono text-xl font-bold text-white">
                    {/* <img src="src/assets/react.svg" /> */}
                    Saurav<span className="text-green-500">-Kumar</span>
                </Link>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=>{setMenuOpen((prev)=>!prev)}}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-green-500 hover:text-white transition-colors font-bold">
                        Home
                    </Link>
                    <Link to="/about" className="text-green-500 hover:text-white transition-colors font-bold">
                        About
                    </Link>
                    <Link to="/projects" className="text-green-500 hover:text-white transition-colors font-bold">
                        Projects
                    </Link>
                    <Link to="/contact" className="text-green-500 hover:text-white transition-colors font-bold">
                        Contact Me 
                    </Link>
                </div>
            </div>
        </div>
    </nav>);
}