import React, { useState } from 'react'
import Header from './Header'

function Profile() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    return (
        <>
            <Header />
            <h1 className='text-white'>User Profile</h1>
            <form>
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    value={name} placeholder='name' type="text" onChange={(e) => setName(e.target.value)} /><br />
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    value={email} placeholder='email' type="email" onChange={(e) => setEmail(e.target.value)} /><br />
            </form>
        </>
    )
}

export default Profile
