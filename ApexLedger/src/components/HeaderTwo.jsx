import React, { useContext } from 'react'
import {ActiveTabContext} from "./Context/Context"
const HeaderTwo = () => {
    const activeTab = useContext(ActiveTabContext)
    console.log(activeTab);
    
    return (
        <div className='w-full'>
            <ul className='p-4 flex w-full h-20'>
                <li className='mr-auto uppercase font-Orbitron font-extrabold md:text-xl'><p>{activeTab}</p><p className = "text-xs tracking-widest text-zinc-500">{new Date().toDateString()}</p></li>
                <li className=''>kb</li>
            </ul>
        </div>
    )
}

export default HeaderTwo