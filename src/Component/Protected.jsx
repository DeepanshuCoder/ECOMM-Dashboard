import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {
    const Cmp = props.Cmp
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('User-Info')) {
            navigate('/register')
        }
    }, [])
    return (
        <>
            <Cmp />
        </>
    )
}

export default Protected
