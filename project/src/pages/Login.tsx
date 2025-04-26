import React, { useId } from 'react'
import { useState } from 'react'
const Login = () => {
    const [adminLogin, setAdminLogin] = useState('user-type');
    return (
        <div>
            <div className='mt-7 flex items-center justify-center gap-4'>
                <h2>I AM :- </h2>
                <div className='flex items-center justify-center gap-2'>
                    {/* <input type='radio' className='hidden' name='user-type' id='user' /> */}
                    <label htmlFor={'user'} onClick={() => { setAdminLogin('user') }} className={adminLogin == 'user' ? `btn-primary w-32 h-16 text-2xl` : 'w-32 h-16 flex items-center justify-center text-lg cursor-pointer border border-[rgb(13,148,136)] rounded-lg text-neutral-800'}>User</label>
                    {/* <input type='radio' className='hidden' name='user-type' id='admin' /> */}
                    <label htmlFor='admin' onClick={() => { setAdminLogin('admin') }} className={adminLogin == 'admin' ? "btn-primary w-48 h-16 text-2xl" : "w-48 h-16 flex items-center justify-center text-lg cursor-pointer border border-[rgb(13,148,136)] rounded-lg text-neutral-800"}>Admin</label>
                </div>
            </div>
        </div>
    )
}

export default Login
