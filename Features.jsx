import React from 'react'
import { sectionWidth, sectionWrapper, headerText, showBorder } from '../styles/styles'
import { GoArrowRight } from "react-icons/go";

const Features = () => {
  return (
    <section id="features-wrapper" className={`${sectionWrapper}`}>

      <div id="features-section" className={`${sectionWidth} flex flex-col`}>

        <header className='text-center pb-16'>
          <div className='text-sm font-[500]'>Production Made</div>
          <h1 className={`${headerText}`}>Showcase some impressive features</h1>
          <p className='text-gray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos optio cumque perferendis natus doloremque repudiandae consequuntur a nobis aliquam architecto.</p>
        </header>

        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 
            [&>#item]:h-[250px]
            [&>#item]:rounded-[20px]
            ">
          <div id="item" className={`p-4 bg-secondary`}>
            <h2 className={`text-[2rem] font-[700] pb-2`}>Built For Consistency</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptatem?</p>
          </div>
          <div id="item" className={``}><img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full h-full rounded-[20px]' /></div>
          <div id="item" className={``}><img src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full h-full rounded-[20px]' /></div>
          <div id="item" className={``}><img src="https://images.unsplash.com/photo-1587089879249-87bf7d2972df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full h-full rounded-[20px]' /></div>
          <div id="item" className={``}><img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full h-full rounded-[20px]' /></div>
          <div id="item" className={`p-4 bg-secondary flex flex-col justify-between`}>
            <div>

              <h2 className={`text-[2rem] font-[700] pb-2`}>Pre-Built Pages</h2>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            </div>
            <p className='font-[700] text-[1.5rem] flex gap-2 items-center mt-4'><span>Try Out </span> <span className='text-[1.5rem]'><GoArrowRight /></span></p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Features