import React, { useState, useEffect } from "react";
import { formStructure } from "../../validation/formValidation";
import './Contact.css';

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
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h1>Contact</h1>

                    {formStructure.map((field) => (
                        <label key={field.name} className="contact-label">
                            <span>{field.label}</span>
                            {field.name === "message" ? (
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter a message"
                                    className="contact-textarea"
                                    onChange={handleChange}
                                    value={formData.message}
                                />
                            ) : (
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    placeholder={`Enter your ${field.label}`}
                                    className="contact-input"
                                    onChange={handleChange}
                                    value={formData[field.name]}
                                />
                            )}
                        </label>
                    ))}

                    <button
                        type="submit"
                        className="contact-button">
                        Send
                    </button>
                </form>
            </section>
        </>
    );
}
