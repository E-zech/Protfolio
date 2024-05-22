import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './SkillsKeyFrames.css'

export default function Skills() {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('slide-in');

    const skillsToggle = [
        { name: 'Html', icon: faHtml5 },
        { name: 'CSS', icon: faCss3Alt },
        { name: 'JavaScript', icon: faJs },
        { name: 'React', icon: faReact },
        { name: 'NodeJs', icon: faNodeJs },
        { name: 'MongoDB', icon: faDatabase },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationClass('slide-out');
            setTimeout(() => {
                setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skillsToggle.length);
                setAnimationClass('slide-in');
            }, 500);
        }, 2000);

        return () => clearInterval(interval);
    }, [skillsToggle.length]);

    const currentSkill = skillsToggle[currentSkillIndex];

    return (
        <section id="Skills" className="w-[90vw] max-w-[1600px] pt-16 flex flex-col justify-center items-center mx-auto p-4">
            <h1 className="text-3xl">Skills</h1>
            <br />
            <div>
                The Technologies I use:
                <div className={`mt-4 flex items-center space-x-2 skill-display ${animationClass}`}>
                    <span className="text-xl">{currentSkill.name}</span>
                    <FontAwesomeIcon icon={currentSkill.icon} size="2x" />
                </div>
            </div>
        </section>
    );
}

