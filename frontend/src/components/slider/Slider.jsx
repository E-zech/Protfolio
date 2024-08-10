import React from 'react';
import './Slider.css';

export default function Slider() {
    return (
        <>
            <header
                className="slider-header"
                style={{ backgroundImage: `url('../../../public/me.jpg')` }}
                id="Home" >
                <section className="slider-section">
                    <div>Hello</div>
                    <div>I'm Eliya</div>
                    <div>Full-Stack Developer</div>
                    <div className="slider-text-lg">
                        <p>Highly motivated, competitive, and a natural team player.</p>
                        <p>Ready to contribute expertise to a dynamic team.</p>
                    </div>
                </section>
            </header>
        </>
    );
}
