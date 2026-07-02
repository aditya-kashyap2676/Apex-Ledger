import React from 'react'
import UserInput from './Authpages/UserInput'
import AuthHead from './Authpages/AuthHead'
import Button from './Button'
import AuthFoot from './Authpages/AuthFoot'
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const nav = useNavigate()
    const data = [
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
                <AuthHead title={"Sign in"} para={"Access your Dashboard"} />
                {data.map((item, index) => {
                    return <UserInput icon={item.icon} label={item.label1} plh={item.ph} type={item.type} />
                })}
                <Button butt={"sign in"} style={"text-sm font-extrabold w-full py-3 transition hover:translate-y-1"} />
                <hr className='border text-primary-charcoal/10' />
                <AuthFoot cont={"Don't have an Account?"} spn={"Register Now"} />
            </div>

        </div>
    )
}

export default Login
