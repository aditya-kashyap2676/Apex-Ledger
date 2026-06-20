import React from 'react'
import AuthHead from '../Authpages/AuthHead'
import UserInput from '../Authpages/UserInput'
import Button from '../Authpages/Button'
import AuthFoot from '../Authpages/AuthFoot'
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
const CreateAcc = () => {
    const data = [
        {
            icon:<CiUser className='text-black font-black'/>,
            label1: "full name",
            type: "text",
            ph: "Enter Your name",
        },
        {
            icon:<MdOutlineEmail className='text-black'/>,
            label1: "Email Address",
            type: "Email",
            ph: "Enter Email"
        },
        {
            icon:<IoLockClosedOutline className='text-black'/>,
            label1: "Enter Password",
            type: "Password",
            ph: "Enter Password"
        }
    ]
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className='border-4 border-gray-100 rounded-2xl  h-fit w-1/3 content-center p-10 border-b-3 shadow-xl shadow-emerald-100'>
            <AuthHead title={"Create Account"} para={"Register a new Security Profile"} />
            {
                data.map((item, index) => (
                    <UserInput
                        key={index}
                        icon={item.icon}
                        label={item.label1}
                        type={item.type}
                        plh={item.ph}
                    />
                ))
            }
            <Button butt={"provision profile"} />
            <hr  className='text-gray-200 h-fit w-full mt-4'/>
            <AuthFoot cont={"Already Configured ? "} spn={"Sign"} />
            </div>
        </div>
    )
}

export default CreateAcc
