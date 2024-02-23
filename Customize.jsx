import React from 'react'
import Snip from '../Items/Snip'
import { headerText, showBorder, sectionWidth, sectionWrapper } from '../styles/styles'

import { BsHddStackFill } from "react-icons/bs";
import { IoInvertMode } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { HiLightningBolt } from "react-icons/hi";


const Customize = () => {
    return (
        <section id="customize-wrapper" className={`${sectionWrapper} bg-primary`}>

            <div id="customize-section" className={`${sectionWidth} flex justify-center text-center`}>

                <div id="snips-container" className={`w-full text-[#ffffff]`}>

                    <h1 className={`${headerText} pb-12`}>Customize However You Want</h1>

                    <div id="snip-grid" className="grid grid-cols-4 sm:grid-cols-2 gap-4">
                        <Snip icon = {<BsHddStackFill/>} title='Modular Design' />
                        <Snip icon = {<IoMdPhonePortrait/>} title='Responsivenss' />
                        <Snip icon = {<HiLightningBolt/>} title='Smooth UI' />
                        <Snip icon = {<IoInvertMode/>} title='Light and Dark Theme' />

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Customize