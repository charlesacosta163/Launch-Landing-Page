import { useState } from 'react'
import { buttonStyled } from '../styles/styles'
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={`px-16 md:px-8 sm:px-4 py-4 bg-[#fff] sticky top-0`}>
      <nav className='flex justify-between items-center'>
        <div id="logo" className="text-[2rem] font-bold">
          Launch
        </div>

        <div id="menus" className="flex gap-4 items-center sm:hidden">
          <button>What is Launch?</button>
          <button>Services</button>
          <button>FAQs</button>
        </div>

        <button className={`${buttonStyled} bg-secondary sm:hidden`}>Buy Now</button>

        <div className={`hidden sm:flex text-[2rem]`} onClick={() => setOpen(true)}><HiBars3BottomRight /></div>

        <div className={`w-[250px] h-screen flex flex-col gap-4 bg-[#fff] absolute top-0 right-0 bottom-0 p-8 duration-300 ${open === false ? "hidden" : "block"}`}>
          <div className='text-[2rem]' onClick={() => setOpen(false)}><IoCloseOutline /></div>

          <div className='flex flex-col gap-8 mt-8 [&>button]:font-[500]'>
            <button>What is Launch?</button>
            <button>Services</button>
            <button>FAQs</button>
            <button className={`${buttonStyled} bg-secondary sm:block`}>Buy Now</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar