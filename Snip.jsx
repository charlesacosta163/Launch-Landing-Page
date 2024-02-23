import React from 'react'

const Snip = ({icon, title, description}) => {
    return (
        <div id="snip" className="flex flex-col items-center text-center gap-4">
            <div className='w-[50px] h-[50px] rounded-full bg-secondary text-[#000000] flex justify-center items-center text-[1.25rem]'>{icon}</div>
            <h2 className='font-[500] text-[1.25rem]'>{title}</h2>
            <p className='sm:text-[.75rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, mollitia.</p>
        </div>
    )
}

export default Snip