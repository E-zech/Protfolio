import { useContext, useState } from "react";
import { GeneralContext } from "../../App";
import { formStructure } from "../../validation/formValidation";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        // console.log(formData);
        // add a loader 
        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <section id="Contact">
                <form className="w-[70vw] max-w-[1600px] pt-16 flex flex-col justify-center items-center mx-auto p-8 text-mainColor bg-mainBgc gap-6 mb-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl mb-8 font-bold">Contact</h1>

                    {formStructure.map((field) => (
                        <label key={field.name} className="w-full max-w-md mb-4">
                            <span className="block mb-2">{field.label}</span>
                            {field.name === "message" ? (
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter a message"
                                    className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md bg-mainBgcInput cursor-pointer hover:outline-none hover:border-mainColor resize-none transition ease-in-out duration-300"
                                    onChange={handleChange}
                                    value={formData.message}
                                />
                            ) : (
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    placeholder={`Enter your ${field.label}`}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-mainBgcInput hover:outline-none hover:border-mainColor transition ease-in-out duration-300 cursor-pointer"
                                    onChange={handleChange}
                                    value={formData[field.name]}
                                />
                            )}
                        </label>
                    ))}

                    <button
                        type="submit"
                        className="px-6 py-2 bg-black text-white rounded-md hover:bg-opacity-80 hover:cursor-pointer hover:scale-[1.2] transition ease-in-out duration-300"
                        onClick={(ev) => handleSubmit(ev)}>
                        Send
                    </button>
                </form>
            </section>
        </>
    );
}
