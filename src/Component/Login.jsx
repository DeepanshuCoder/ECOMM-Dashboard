import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Login() {
    function def(e) {
        e.preventDefault();
    }
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('User-Info')) {
            navigate('/addproduct')
        }
    }, [])

    async function login() {
        //console.warn(email, pass);
        let item = { email, password: pass }
        let fec = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        fec = await fec.json()
        console.log('User Data', fec)
        localStorage.setItem("User-Info", JSON.stringify(fec))
            navigate('/')
    }
    return (
        <>
            <Header />
            <h1 className='text-white'>Login Page</h1>
            <form onSubmit={def}>
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    value={email} placeholder='email' type="email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    value={pass} placeholder='password' type="password" onChange={(e) => setPass(e.target.value)} /><br />
                <button onClick={login} className='btn btn-primary'>log in</button>
            </form>
        </>
    )
}

export default Login
