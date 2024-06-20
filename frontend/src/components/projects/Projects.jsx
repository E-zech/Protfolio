export default function Projects() {
    return (
        <>
            <section id="Projects" className="w-[80vw] max-w-[1600px] pt-16 flex flex-col justify-center items-center mx-auto p-4 text-mainColor">
                <h1 className="text-3xl">Projects</h1>

                <section className="w-[80vw] max-w-[1600px] pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center items-center mx-auto p-4">
                    <div className="card flex flex-col justify-center items-center p-4 text-mainColor bg-[#282828] shadow-md rounded-md">
                        <img src="../../assets/store.png" alt="Project Image" className="w-full h-48 object-cover rounded-t-md" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Project Title</h2>
                            <p className="mt-2 text-base">This is a brief description of the project.</p>
                            <a href="#" className="mt-4 text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center items-center p-4 text-mainColor bg-[#282828] shadow-md rounded-md">
                        <img src="../../assets/store.png" alt="Project Image" className="w-full h-48 object-cover rounded-t-md" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Project Title</h2>
                            <p className="mt-2 text-base">This is a brief description of the project.</p>
                            <a href="#" className="mt-4 text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                </section>
            </section>
        </>

    )
}


