import React from 'react'
import UserInput from '../Authpages/UserInput'
import AuthHead from '../Authpages/AuthHead'
import Button from '../Authpages/Button'
import AuthFoot from '../Authpages/AuthFoot'

const Login = () => {
    const data = [
        {
            label1: "Email Address",
            type: "Email",
            ph: "Enter Email"
        },
        {
            label1: "Enter Password",
            type: "Password",
            ph: "Enter Password"
        }
    ]
    return (
        <div className="min-h-screen w-full flex items-center justify-center" >
            <div className='border-4 border-gray-100 rounded-2xl  h-fit w-1/3 content-center p-10 border-b-3 shadow-xl shadow-emerald-100'>
                <AuthHead title={"sign in "} para={"Access your private dashboard"}/>
                {
                    data.map((item, index) => (
                        <UserInput
                            key={index}
                            label={item.label1}
                            type={item.type}
                            plh={item.ph}
                        />
                    ))
                }
                <Button butt={"establish sesssion"}/>
                <hr  className='text-gray-200 h-fit w-full mt-4'/>
                <AuthFoot cont={"Don't Have a Profile ?"} spn={"Register Now"}/>
            </div>
        </div>
    )
}

export default Login
