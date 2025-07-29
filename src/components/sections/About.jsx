import { RevealOnScroll } from "../RevealOnScroll"
import { Link } from 'react-router-dom';

export const About=()=>{

    const frontendSkills=["Tailwindcss","JavaScript", "React.js", "jQuery", "Bootstrap", "EJS", "OAuth", "Streamlit", "Seaborn"]
    const backendSkills=["Python", "Java", "C++", "SQL", "Express.js", "Node.js", "FastAPI", "Uvicorn", "PostgreSQL", "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Librosa"]

    return(
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-stone-400 to-neutral-700 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-black/50 border hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]">
                {/* <p className="text-gray-500 mb-3">
                Hi! I’m Saurav, a passionate IT engineering student currently in my 3rd year. I specialize in building scalable, machine learning-driven systems and love tackling complex problems in software development.<br/>
                My journey so far has led me to explore a range of technologies, including Python, TensorFlow, Kubernetes, and Node.js. I’ve had the opportunity to work on exciting projects like a cloud auto-scaling system, a plant disease detection model, and a secure diary app using modern web tech.
                </p> */}
                <p className="text-lg mb-3 max-w-3xl mx-auto text-gray-700">
                    Hi! I'm Saurav, a passionate IT engineering student currently in my 5th semester. I specialize in building scalable, machine learning-driven systems and love tackling complex problems in software development.
                </p>
                <p className="text-lg mb-3 max-w-3xl mx-auto text-gray-700">
                    My journey so far has led me to explore a range of technologies, including <strong>Python</strong>, <strong>C++</strong>, <strong>Javascript</strong>, and <strong>SQL</strong>. I’ve had the opportunity to work on exciting projects like a <strong>cloud auto-scaling system</strong>, a <strong>music genre detection model</strong>, and a <strong>dog vision project</strong> using modern tech.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]">
                        <h3 className="text-xl font-bold mb-4 text-gray-500">
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]">
                        <h3 className="text-xl font-bold mb-4 text-gray-500">
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]">
                    <h3 className="text-xl font-bold mb-4 text-gray-500">🏫 Education</h3>
                    <ul className="list-none list-inside text-gray-700 space-y-2">
                        <li>
                            <strong>B.Tech. in IT</strong><br/> IIIT Sonepat (2022-2026)
                        </li>
                        <li>
                            <strong>Relevant Coursework :</strong> Data Structures, Cloud Computing, Web development, DBMS using MySQL, Computer Networks, Operating System, Compiler, Machine Learning, Artificial Intelligence and Automata. 
                        </li>
                        <li>
                            <strong>CGPA :</strong> 8.62
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 transition-all hover:border-green-700/30 hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]">
                    <h3 className="text-xl font-bold mb-4 text-gray-500">👨‍💻 Technical Achievements</h3>
                    <ul className="list-none list-inside text-gray-700 space-y-2">
                        <li>
                            <strong>Problem Solving :</strong><br/>Solved 400+ DSA questions on leetcode, codechef, gfg, etc.
                        </li>
                        <li>
                            <strong>Hackathons :</strong><br/> Participated in SIH 2024 and a 24hr hackathon at Amity University, Noida. 
                        </li>
                        <li>
                            <strong>Certifications :</strong><br/> Completed <strong>Full-stack Web Development bootcamp</strong> by Angela Yu on Udemy and <strong>Machine Learning course</strong> by Andrew Ng on Udemy.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </RevealOnScroll>

    </section>)
}