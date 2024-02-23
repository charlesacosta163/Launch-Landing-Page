import React from 'react'
import { sectionWidth, sectionWrapper, buttonStyled, showBorder } from '../styles/styles'
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <section id="hero-wrapper" className={`${sectionWrapper}`}>

        <div id="hero-section" className={`${sectionWidth} flex justify-center text-center`}>

            <div id="hero-container" className='flex flex-col gap-8 items-center justify-center max-w-[600px] w-full'>
                <h1 className='text-[3.5rem] sm:text-[2rem] font-[900]'>Launch a SaaS product in Style</h1>
                <p className='text-gray font-[500]'>Create a stylish website easy and for everyone – SaaS Platforms, Technology Startups and more.</p>

                <div className="flex gap-4">
                    <button className={`px-8 sm:px-6 py-4 rounded-md bg-primary text-[#ffffff] flex gap-2 items-center`}>Buy Now <GoArrowRight/></button>
                    <button className={`px-8 sm:px-6 py-4 rounded-md bg-secondary`}>Preview in Figma</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero