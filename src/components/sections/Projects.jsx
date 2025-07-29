import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-stone-400 to-neutral-700 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-black/50 hover:-translate-y-1 hover:border-green-700/30 hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-gray-500"> Music Genre Classification</h3>
              <p className="text-gray-700 mb-4">
                CNN-based system to classify songs into genres using spectrograms.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Tensorflow", "Librosa", "Seaborn", "Streamlit"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center">
                <a
                  href="https://musicgenreclassification.streamlit.app/"
                  target="_blank"
                  className="mr-4 text-green-500 hover:text-green-700 hover:font-bold py-1 px-3 rounded-lg border-2 border-green-500 hover:bg-green-100 transition-all duration-200"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sk8011/Music_genre_classification-DL"
                  target="_blank"
                  className="text-green-400 hover:font-bold transition-colors my-4 mr-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-black/50 
              hover:-translate-y-1 hover:border-green-700/30
              hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2 text-gray-500">Dog Vision</h3>
              <p className="text-gray-700 mb-4">
                A computer vision project for dog breed detection trained on a diverse image dataset of 120 dog breeds.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TensorFlow", "Seaborn", "Transfer Learning", "Keras"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center">
                <a
                  href="https://github.com/sk8011/dog-vision"
                  target="_blank"
                  className="text-green-400 hover:font-bold transition-colors my-4 mr-4"
                >
                  View Project →
                </a>
                {/* <a
                  href="https://musicgenreclassification.streamlit.app/"
                  target="_blank"
                  className="mr-4 text-green-500 hover:text-green-700 hover:font-bold py-1 px-3 rounded-lg border-2 border-green-500 hover:bg-green-100 transition-all duration-200"
                >
                  Live Demo
                </a> */}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-black/50 
              hover:-translate-y-1 hover:border-green-700/30
              hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2 text-gray-500">AI-based Cloud Resource Scaling System</h3>
              <p className="text-gray-700 mb-4">
                Predicts future CPU usage for cloud servers by sliding window approach and enables dynamic horizontal scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PyTorch", "Docker", "Kubernetes"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex items-center">
                <a
                  href="https://github.com/sk8011/AIBased_CloudResource_ScalingSystem"
                  target="_blank"
                  className="text-green-400 hover:font-bold transition-colors my-4 mr-4"
                >
                  View Project →
                </a>
                {/* <a
                  href="https://musicgenreclassification.streamlit.app/"
                  target="_blank"
                  className="mr-4 text-green-500 hover:text-green-700 hover:font-bold py-1 px-3 rounded-lg border-2 border-green-500 hover:bg-green-100 transition-all duration-200"
                >
                  Live Demo
                </a> */}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-black/50 
              hover:-translate-y-1 hover:border-green-700/30
              hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2 text-gray-500">My Portfolio Website</h3>
              <p className="text-gray-700 mb-4">
                Website for showcasing all my projects and skills that also allows people to send me messages.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Tailwindcss", "EmailJS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center ">
                <Link
                  to="/"
                  className="mr-4 text-green-500 hover:text-green-700 hover:font-bold py-1 px-3 rounded-lg border-2 border-green-500 hover:bg-green-100 transition-all duration-200"
                >
                  Live Demo
                </Link>
                <a
                  href="https://github.com/sk8011/portfolio-react"
                  target="_blank"
                  className="text-green-400 hover:font-bold transition-colors my-4 mr-4"
                >
                  View Project →
                </a>
              </div>
            </div>


            <div
              className="
              glass p-6 rounded-xl border border-black/50 
              hover:-translate-y-1 hover:border-green-700/30
              hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2 text-gray-500">NoteGPT</h3>
              <p className="text-gray-700 mb-4">
                It is a full-stack markdown-based note-taking app enhanced with an AI assistant. Users can create, edit, and organise notes, embed images, and get contextual answers from an integrated chatbot.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Typescript", "Node", "Express", "Groq API"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0px_2px_7px_rgba(0,255,0,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center ">
                <a
                  href="https://smartnotes-buhw.onrender.com"
                  className="mr-4 text-green-500 hover:text-green-700 hover:font-bold py-1 px-3 rounded-lg border-2 border-green-500 hover:bg-green-100 transition-all duration-200"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/sk8011/notetake-ai"
                  target="_blank"
                  className="text-green-400 hover:font-bold transition-colors my-4 mr-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};