import './Projects.css'

export default function Projects() {
    return (
        <>
            <section id="Projects" className="projects-section">
                <h1>Projects</h1>

                <section className="projects-grid">

                    <div className="card">
                        <img src="https://picsum.photos/200/300" alt="Project Image" />
                        <div className="content">
                            <h2>Project Title</h2>
                            <p>This is a brief description of the project.</p>
                            <a href="#">View Project</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://picsum.photos/200/300" alt="Project Image" />
                        <div className="content">
                            <h2>Project Title</h2>
                            <p>This is a brief description of the project.</p>
                            <a href="#">View Project</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://picsum.photos/200/300" alt="Project Image" />
                        <div className="content">
                            <h2>Project Title</h2>
                            <p>This is a brief description of the project.</p>
                            <a href="#">View Project</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://picsum.photos/200/300" alt="Project Image" />
                        <div className="content">
                            <h2>Project Title</h2>
                            <p>This is a brief description of the project.</p>
                            <a href="#">View Project</a>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}