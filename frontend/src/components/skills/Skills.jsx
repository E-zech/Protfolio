import './Skills.css';
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
    const [clicked, setClicked] = useState(false);
    const skillsRef = useRef(null);


    useEffect(() => {
        if (clicked && skillsRef.current) {
            const { offsetTop } = skillsRef.current;
            window.scrollTo({
                top: offsetTop - 70, // Adjust the offset here
                behavior: 'smooth'
            });
        }
    }, [clicked]);

    const handleClick = () => {
        setClicked(prevClicked => !prevClicked);
    };

    const skills = [
        { name: 'Html', icon: faHtml5 },
        { name: 'CSS', icon: faCss3Alt },
        { name: 'JavaScript', icon: faJs },
        { name: 'React', icon: faReact },
        { name: 'NodeJs', icon: faNodeJs },
        { name: 'MongoDB', icon: faDatabase },
    ];

    return (
        <>
            <section
                id="Skills"
                className={`skills-section ${clicked ? 'clicked' : ''}`}
                onClick={handleClick}
                ref={skillsRef}
            >
                <h1>Skills</h1>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-display">
                            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                        </div>
                    ))}
                </div>
            </section>

            {clicked &&
                <>
                    {/* <section>
                        <h1> ?? </h1>
                    </section> */}
                </>

            }

        </>

    );
}
