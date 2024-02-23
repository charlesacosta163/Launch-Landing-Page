import React from 'react'
import { sectionWidth, sectionWrapper, headerText, showBorder } from '../styles/styles'
import { GoArrowRight } from "react-icons/go";

const Action = () => {
    return (
        <section id="action-wrapper" className={`${sectionWrapper}`}>

            <div id="action-section" className={`${sectionWidth}`}>

                <div id="container" className='rounded-[20px] text-[#ffffff] bg-primary w-full flex flex-col items-center p-16 sm:p-8'>

                    <h2 className={`${headerText} text-center`}>Ready to get Started?</h2>
                    <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, fuga?</p>

                    <div className="flex gap-4 mt-8">
                        <button className={`px-8 py-4 rounded-md bg-[#3888ff] text-[#ffffff] flex gap-2 items-center`}>Buy Now <GoArrowRight /></button>
                        <button className={`px-8 py-4 rounded-md bg-secondary text-primary`}>Preview in Figma</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Action