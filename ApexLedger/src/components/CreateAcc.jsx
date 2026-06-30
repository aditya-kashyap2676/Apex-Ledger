import React from 'react'
import AuthHead from './Authpages/AuthHead'
import UserInput from './Authpages/UserInput'
import Button from './Button'
import AuthFoot from './Authpages/AuthFoot'
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
const CreateAcc = () => {
    const data = [
        {
            icon: <CiUser className='text-black font-black' />,
            label1: "full name",
            type: "text",
            ph: "Enter Your name",
        },
        {
            icon: <MdOutlineEmail className='text-black' />,
            label1: "Email Address",
            type: "Email",
            ph: "Enter Email"
        },
        {
            icon: <IoLockClosedOutline className='text-black' />,
            label1: "Enter Password",
            type: "Password",
            ph: "Enter Password"
        }
    ]
    return (
        <div className='center flex-col '>
            <div className='m-8 mt-0 w-100 space-y-4 border-2 rounded-xl py-7 px-8 border-primary-charcoal/5 bg-white shadow-2xl  shadow-primary-emerald/20'>
                <AuthHead title={"create account"} para={"Register a New Secure Profile"} />
                {data.map((item, index) => {
                    return <UserInput icon={item.icon} label={item.label1} plh={item.ph} type={item.type} />
                })}
                <Button butt={"provision profile"} style={"text-sm font-extrabold w-full py-3 transition hover:translate-y-1"}/>
                <hr className='border text-primary-charcoal/10'/>
                <AuthFoot cont={"Already have an Account?"} spn={"Sign in"}/>
            </div>

        </div>
    )
}

export default CreateAcc
