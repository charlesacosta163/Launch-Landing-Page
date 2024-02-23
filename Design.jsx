import React from 'react'
import { headerText, sectionWidth, sectionWrapper, showBorder } from '../styles/styles'

const Design = () => {
    return (
        <section id="design-wrapper" className={`${sectionWrapper}`}>

            <div id="design-section" className={`${sectionWidth} flex flex-col gap-24 sm:gap-12`}>

                <div id="design" className={`h-[60svh] sm:h-auto flex gap-12 sm:flex-col-reverse bg-[#f5f5f5] p-8 rounded-[20px]`}>

                    <div id="description" className="flex flex-col gap-4 flex-[3] self-center text-right">
                        <div className='max-w-[40ch] w-full'>
                            <h2 className={`${headerText} md:text-[2rem] pb-4`}>Save time and Design Fast</h2>
                            <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod optio pariatur assumenda sit totam.</p>
                        </div>
                    </div>

                    <div className='flex-[2]'>
                        <img src="https://images.unsplash.com/photo-1603969280040-3bbb77278211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full rounded' />
                    </div>
                </div>

                <div id="design" className={`h-[60svh] sm:h-auto flex gap-12 sm:flex-col-reverse bg-[#f5f5f5] p-8 rounded-[20px]`}>


                    <div className='flex-[2]'>
                        <img src="https://images.unsplash.com/photo-1603969280040-3bbb77278211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full rounded' />
                    </div>
                    <div id="description" className="flex flex-col gap-4 flex-[3] self-center text-left">
                        <div className='max-w-[40ch] w-full'>
                        <h2 className={`${headerText} md:text-[2rem] pb-4`}>Implement Data with Ease</h2>
                            <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod optio pariatur assumenda sit totam.</p>
                        </div>
                    </div>
                </div>

                <div id="design" className={`h-[60svh] sm:h-auto flex gap-12 sm:flex-col-reverse bg-[#f5f5f5] p-8 rounded-[20px]`}>

                    <div id="description" className="flex flex-col gap-4 flex-[3] self-center text-right">
                        <div className='max-w-[40ch] w-full'>
                        <h2 className={`${headerText} md:text-[2rem] pb-4`}>Submit your Projects in no time</h2>
                            <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod optio pariatur assumenda sit totam.</p>
                        </div>
                    </div>

                    <div className='flex-[2]'>
                        <img src="https://images.unsplash.com/photo-1603969280040-3bbb77278211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full rounded' />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Design