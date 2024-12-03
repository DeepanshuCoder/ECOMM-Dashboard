import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Register() {
    function def(e) {
        e.preventDefault()
    }
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('User-Info')) {
            navigate('/addproduct')
        }
    }, [])

    async function submit() {
        let item = { name, email, pass }
        console.warn(item)
        // fetch("http://127.0.0.1:8000/api/register", {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(item)
        // }).then((result) => {
        //     result.json().then((res) => {
        //         console.warn('User Data Info:', res)
        //     })
        // })
        let fec = await fetch("http://127.0.0.1:8000/api/register", {
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
        navigate('/addproduct')
    }
    // const userInfo = localStorage.getItem("User-Info");
    // console.log('Retrieved User Info:', userInfo);

    return (
        <>
            <Header />
            <h1 className='text-white'>Register Page</h1>
            <form onSubmit={def}>
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    value={name} placeholder='name' type="text" onChange={(e) => setName(e.target.value)} /><br />
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    value={email} placeholder='email' type="email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    value={pass} placeholder='password' type="password" onChange={(e) => setPass(e.target.value)} /><br />
                <button onClick={submit} className='btn btn-primary'>sign up</button>
            </form>
        </>
    )
}

export default Register
