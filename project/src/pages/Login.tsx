// import React, { useId } from 'react'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [adminLogin, setAdminLogin] = useState('user-type');
    const [LoginType, setLoginType] = useState('login')
    const username = useRef<HTMLInputElement>(null)
    const usermail = useRef<HTMLInputElement>(null)
    const userpassword = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const submit = async () => {
        
        if (usermail.current?.value == "" || userpassword.current?.value == "") {
            alert("Please fill all the fields")
        } else {
            if (LoginType == 'login') {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ "mail": usermail.current?.value, "password": userpassword.current?.value }),
                });
                const res = await response.json()
                if(res.status == 'accepted'){
                    localStorage.setItem("mail", usermail.current?.value)
                    navigate('/')
                }
                console.log(res)
            } else {
                if (username.current?.value == "") {
                    alert("Please fill all the fields")
                } else {
                    const response = await fetch('http://localhost:3000/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ "name": username.current?.value, "mail": usermail.current?.value, "password": userpassword.current?.value, "usertype": adminLogin }),
                    });
                    const res = await response.json()
                    console.log(res)
                    if(res.status == "success"){
                        localStorage.setItem("mail" , usermail.current?.value)
                        navigate('/')
                    }
                }
            }
        }
    }

    return (
        <div className={adminLogin == 'user-type' ? 'flex flex-col items-center w-full' : 'justify-center items-center w-full flex flex-col'}>
            {adminLogin == 'user-type' ? <div className='w-[60%] mt-6 border bg-red-300 border-red-600 rounded-lg h-8 flex items-center px-4'>
                Please Select type of user to login
            </div>
                : null}
            <div className={adminLogin == 'user-type' ? 'mt-7 flex items-center gap-4 w-[60%]' : "mt-7 flex items-center gap-4"}>
                <h2>I AM :- </h2>
                <div className='flex items-center justify-center gap-2'>
                    <label htmlFor={'user'} onClick={() => { setAdminLogin('user') }} className={adminLogin == 'user' ? `btn-primary w-32 h-12 text-2xl` : 'w-32 h-12 flex items-center justify-center text-lg cursor-pointer border border-[rgb(13,148,136)] rounded-lg text-neutral-800'}>User</label>
                    <label htmlFor='admin' onClick={() => { setAdminLogin('admin') }} className={adminLogin == 'admin' ? "btn-primary w-48 h-12 text-2xl" : "w-48 h-12 flex items-center justify-center text-lg cursor-pointer border border-[rgb(13,148,136)] rounded-lg text-neutral-800"}>Admin</label>
                </div>
            </div>
            <div className={adminLogin == 'user-type' ? 'mt-7 flex items-center gap-4 w-[60%]' : "mt-7 flex items-center gap-4"}>
                <div className='flex items-center justify-center gap-2'>
                    <label htmlFor={'user'} onClick={() => { setLoginType('login') }} className={LoginType == 'login' ? `btn-primary w-32 h-12 text-xl` : 'w-32 h-12 flex items-center justify-center text-lg cursor-pointer border border-[rgb(13,148,136)] rounded-lg text-neutral-800'}>Login</label>
                    <label htmlFor='admin' onClick={() => { setLoginType('Signup') }} className={LoginType == 'Signup' ? "btn-primary w-48 h-12 text-xl" : "w-48 h-12 flex items-center justify-center text-lg cursor-pointer border border-[rgb(13,148,136)] rounded-lg text-neutral-800"}>Signup</label>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-[60%] mt-5'>
                <div className={LoginType != "Signup" ? 'hidden' : "block"}>
                    <label htmlFor="name">Name :- </label>
                    <input type="text" id='name' className='border border-[rgb(13,148,136)] outline-none rounded-lg px-2 py-1' ref={username} />
                </div>
                <div>
                    <label htmlFor="email">email :- </label>
                    <input type="email" id='email' className='border border-[rgb(13,148,136)] outline-none rounded-lg px-2 py-1' ref={usermail} />
                </div>
                <div>
                    <label htmlFor="password">password :- </label>
                    <input type="password" id='password' className='border border-[rgb(13,148,136)] outline-none rounded-lg px-2 py-1' ref={userpassword} />
                </div>
            </div>
            <button className={adminLogin == 'user-type' ? 'hidden' : 'btn-primary my-5'} onClick={submit}>Log In</button>
        </div>
    )
}

export default Login