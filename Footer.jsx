import React from 'react'
import { buttonStyled, sectionWidth, sectionWrapper, showBorder } from '../styles/styles'

const Footer = () => {
    return (
        <section id="footer-wrapper" className={`${sectionWrapper} bg-primary`}>

            <footer className={`${sectionWidth} flex flex-col gap-12 sm:px-8 px-16 sm:py-4 rounded-[20px] text-[#ffffff]`}>

                <div id="top" className='flex justify-between items-start sm:flex-col'>
                    <div className="logo text-[2rem] font-bold">launch</div>

                    <div id="links" className='flex flex-col gap-4 sm:hidden'>
                        <div className='text-[1.2rem] font-[600]'>Categories</div>
                        <div className='hover:underline text-[#cccccc]'>How to Launch</div>
                        <div className='hover:underline text-[#cccccc]'>Our Services</div>
                        <div className='hover:underline text-[#cccccc]'>Contact Us</div>
                    </div>

                    <div id="links" className='flex flex-col gap-4 sm:hidden'>
                        <div className='text-[1.2rem] font-[600]'>Socials</div>
                        <div className='hover:underline text-[#cccccc]'>Instagram</div>
                        <div className='hover:underline text-[#cccccc]'>Facebook</div>
                        <div className='hover:underline text-[#cccccc]'>Twitter</div>
                        <div className='hover:underline text-[#cccccc]'>Email</div>
                    </div>

                    <div className="hidden justify-between gap-12 sm:flex mt-8">
                        <div id="links" className='flex flex-col gap-4'>
                            <div className='text-[1.2rem] font-[600]'>Categories</div>
                            <div className='hover:underline text-[#cccccc]'>How to Launch</div>
                            <div className='hover:underline text-[#cccccc]'>Our Services</div>
                            <div className='hover:underline text-[#cccccc]'>Contact Us</div>
                        </div>

                        <div id="links" className='flex flex-col gap-4'>
                            <div className='text-[1.2rem] font-[600]'>Socials</div>
                            <div className='hover:underline text-[#cccccc]'>Instagram</div>
                            <div className='hover:underline text-[#cccccc]'>Facebook</div>
                            <div className='hover:underline text-[#cccccc]'>Twitter</div>
                            <div className='hover:underline text-[#cccccc]'>Email</div>
                        </div>
                    </div>

                </div>

                <div id="bottom" className='max-w-[400px] w-full'>
                    <div>Subscribe to our Newsletter</div>
                    <div className="flex gap-2 mt-8 sm:block">
                        <input type="text" className='w-full rounded px-4 py-2' placeholder='Enter your email' />
                        <button className={`${buttonStyled} bg-[#3888ff] sm:mt-2`}>Submit</button>
                    </div>
                </div>

                <hr className='text-gray' />

                <div className='text-[rgba(255,255,255,.35)]'>© 2023 Launch</div>
            </footer>
        </section>

    )
}

export default Footer