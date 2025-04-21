export const Home= ()=>{
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-blue-900 to-purple-200 bg-clip-text text-transparent font-bold mb-6 leading-right">
                    Hi. I'm Saurav
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
                    I'm 20 years old and i love coding.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        My Projects
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>);
}