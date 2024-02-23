import React from 'react'
import { headerText, sectionWidth, sectionWrapper, showBorder } from '../styles/styles'
import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";


const Questions = () => {
    const allAcc = [{
        id: 1,
        details: "Lorem ipsum suluy dolor sit amet",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate id consequatur cum maxime dolor, facere commodi odio ut ipsa!",
        isOpen: false
    }, {
        id: 2,
        details: "Excepteur sin dolor",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate id consequatur cum maxime dolor, facere commodi odio ut ipsa!",
        isOpen: false
    },{
        id: 3,
        details: "Adispicing elit maxime dolor",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate id consequatur cum maxime dolor, facere commodi odio ut ipsa!",
        isOpen: false
    },{
        id: 4,
        details: "Mostur Mama Lorem Para",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate id consequatur cum maxime dolor, facere commodi odio ut ipsa!",
        isOpen: false
    }]
    
    const [accordions, setAccordions] = useState(allAcc)

    const toggleAccordion = (id) => {
        setAccordions(accordions.map(accordion =>
            accordion.id === id ? { ...accordion, isOpen: !accordion.isOpen } : accordion
        ));
    };
  return (
    <section id="questions-wrapper" className={`${sectionWrapper}`}>

        <div id="questions-section" className={`${sectionWidth} flex flex-col items-center`}>

            <header className='text-center pb-12'>
                <h2 className={`${headerText}`}>Frequently Asked Questions</h2>
                <p className='text-gray'>Need help with something? Here are our most frequently asked questions.</p>
            </header>

            <div id="accordion-container" className={`flex flex-col gap-4 max-w-[800px] w-full`}>

                {accordions.map((accordion, index) => (
                        <div key={accordion.id} id="accordion" className={`w-full bg-[#f5f5f5] rounded`} onClick={() => toggleAccordion(accordion.id)}>
                            <div id="details" className='flex justify-between px-8 py-4'>
                                <div className='font-[500]'>{accordion.details}</div>
                                <button>{accordion.isOpen === false? <FaArrowDown /> : <FaArrowUp />}</button>
                            </div>
                            <p id='summary' className={`px-8 py-4 ${accordion.isOpen ? "block" : "hidden"} text-gray`}>{accordion.summary}</p>
                        </div>
                    ))}
            </div>
        </div>

    </section>
  )
}

export default Questions