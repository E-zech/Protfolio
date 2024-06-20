import { useContext } from "react";
import { GeneralContext } from "../../App";

export default function Contact() {

    const { formData, setFormData } = useContext(GeneralContext);

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
        console.log(formData)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(formData);

        // make a fetch or try and catch from the backend to send the obj with the form data to my email 
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    }
    return (
        <>
            <section id="Contact">
                <form
                    action=""
                    className="w-[70vw] max-w-[1600px] pt-16 flex flex-col justify-center items-center mx-auto p-8 text-mainColor bg-mainBgc gap-6 mb-8 rounded-lg shadow-lg"
                >
                    <h1 className="text-3xl mb-8 font-bold">Contact</h1>
                    <label htmlFor="name" className="w-full max-w-md mb-4">
                        <span className="block mb-2">Name:</span>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 rounded-md bg-mainBgcInput hover:outline-none hover:border-mainColor transition ease-in-out duration-300 cursor-pointer"
                            onChange={(ev) => handleChange(ev)}
                            value={formData.name}
                        />
                    </label>
                    <label htmlFor="email" className="w-full max-w-md mb-4">
                        <span className="block mb-2">Email:</span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-mainBgcInput hover:outline-none hover:border-mainColor transition ease-in-out duration-300 cursor-pointer"
                            onChange={(ev) => handleChange(ev)}
                            value={formData.email}
                        />
                    </label>
                    <label htmlFor="message" className="w-full max-w-md mb-4">
                        <span className="block mb-2">Message:</span>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter a message"
                            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md bg-mainBgcInput cursor-pointer hover:outline-none hover:border-mainColor resize-none transition ease-in-out duration-300"
                            onChange={(ev) => handleChange(ev)}
                            value={formData.message}
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-black text-white rounded-md hover:bg-opacity-80 hover:cursor-pointer hover:scale-[1.2] transition ease-in-out duration-300"
                        onClick={(ev) => handleSubmit(ev)}
                    >
                        Send
                    </button>
                </form>
            </section>
        </>
    );
}
