import React, { useId } from 'react'
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
    const { loginWithRedirect } = useAuth0();
    const [adminLogin, setAdminLogin] = useState('user-type');
    return (
        <div className={adminLogin == 'user-type' ? 'flex flex-col items-center w-full' : 'justify-center items-center w-full flex flex-col'}>
            {adminLogin == 'user-type' ? <div className='w-[60%] mt-6 border bg-red-300 border-red-600 rounded-lg h-8 flex items-center px-4'>
                    Please Select type of user to login
                </div>
            : null}
            <div className={adminLogin == 'user-type' ? 'mt-7 flex items-center gap-4 w-[60%]' : "mt-7 flex items-center gap-4"}>
                <h2>I AM :- </h2>
                <div className='flex items-center justify-center gap-2'>
                    {/* <input type='radio' className='hidden' name='user-type' id='user' /> */}
                    <label htmlFor={'user'} onClick={() => { setAdminLogin('user') }} className={adminLogin == 'user' ? `btn-primary w-32 h-12 text-2xl` : 'w-32 h-12 flex items-center justify-center text-lg cursor-pointer border border-[rgb(13,148,136)] rounded-lg text-neutral-800'}>User</label>
                    {/* <input type='radio' className='hidden' name='user-type' id='admin' /> */}
                    <label htmlFor='admin' onClick={() => { setAdminLogin('admin') }} className={adminLogin == 'admin' ? "btn-primary w-48 h-12 text-2xl" : "w-48 h-12 flex items-center justify-center text-lg cursor-pointer border border-[rgb(13,148,136)] rounded-lg text-neutral-800"}>Admin</label>
                </div>
            </div>
            <button className={adminLogin == 'user-type' ? 'hidden' :'btn-primary mt-5'} onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    )
}

export default Login
