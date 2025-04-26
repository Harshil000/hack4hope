import React, { useId } from 'react'
import { useState } from 'react'
const Login = () => {
    // const [adminLogin, setAdminLogin] = useState;
    return(
        <div className='h-screen w-full flex items-center justify-center flex-col gap-24'>
            <h1>I am a</h1>
            <div className='flex items-center justify-center gap-10'>
                <input type='radio' className='hidden' name='user-type' id='user' />
                <label htmlFor={'user'} className="btn-primary w-32 h-24 text-4xl">User</label>
                <input type='radio' className='hidden' name='user-type' id='admin' />
                <label htmlFor='admin' className="btn-primary w-48 h-24 rounded-lg bg-blue-500 text-6xl flex items-center justify-center text-yellow-500">Admin</label>
            </div>
        </div>
    )
}

export default Login
