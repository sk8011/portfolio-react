import { Link } from 'react-router-dom';

export const Home= ()=>{
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-stone-400 to-neutral-700 bg-clip-text text-transparent font-bold mb-6 leading-right">
                    Hi. I'm Saurav
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
                    I'm a 3rd year IT engineering student passionate about building smart software with a strong focus on machine learning, backend logic, and clean design.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link to="/projects" className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        My Projects
                    </Link>
                    <Link to="/contact" className="border border-black/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Contact Me
                    </Link>
                </div>
                <a
                    href="https://drive.google.com/file/d/18Aomatbjlu9Km5mYNfHy4GhJXq8RbhIg/view?usp=sharing" // Replace with your actual resume path or external link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-gray-600 text-white py-3 px-6 rounded font-medium transition-all duration-200 border border-green-500 hover:from-green-600 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    >
                    View Resume 📄
                </a>
            </div>
        </section>);
}