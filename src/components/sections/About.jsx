import { RevealOnScroll } from "../RevealOnScroll"
import { Link } from 'react-router-dom';

export const About=()=>{

    const frontendSkills=["React","Tailwindcss","Bootstrap","CSS"]
    const backendSkills=["NodeJS","PostgreSQL","ML","DL"]

    return(
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-stone-400 to-neutral-700 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-black/50 border hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[2px_4px_7px_rgba(0,255,0,0.8)]">
                <p className="text-gray-500 mb-6">
                    There's a ton to know about me but for now, ill leave it empty to fill it later.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[1px_1px_7px_rgba(0,255,0,0.8)]">
                        <h3 className="text-xl font-bold mb-4 text-gray-500">
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(0,255,0,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[1px_1px_7px_rgba(0,255,0,0.8)]">
                        <h3 className="text-xl font-bold mb-4 text-gray-500">
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(0,255,0,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[2px_4px_7px_rgba(0,255,0,0.8)]">
                    <h3 className="text-xl font-bold mb-4 text-gray-500">🏫Education</h3>
                    <ul className="list-disc list-inside text-gray-500 space-y-2">
                        <li>
                            <strong>B.Tech. in IT</strong> - IIIT Sonepat (2022-2026)
                        </li>
                        <li>
                            <strong>Relevant Coursework :</strong> DSA, Cloud Computing, DBMS using MySQL, Computer Networks, Operating System
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[2px_4px_7px_rgba(0,255,0,0.8)]">
                    <h3 className="text-xl font-bold mb-4 text-gray-500">💼Work Experience</h3>
                    <div className="space-y-4 text-gray-500">
                        <div>
                            <h4 className="font-semibold">Software engineer at ... (2023-2024)</h4>
                            <p>Did nothing</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Intern at ... (may 2022 - july 2022)</h4>
                            <p>Did something</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>

    </section>)
}