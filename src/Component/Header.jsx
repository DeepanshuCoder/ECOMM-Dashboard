import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Header() {
    const user = JSON.parse(localStorage.getItem('User-Info'))
    const navigate = useNavigate()
    function Clear() {
        localStorage.clear()
        navigate('/register')
        navigate('/login')
    }
    function Profile() {
        navigate('/profile')
    }
    return (
        <>
            <Navbar expand="lg" className=" bg-slate-900 rounded-3xl">
                <Container>
                    <NavLink className='mx-3 my-1 text-2xl no-underline text-gray-300' to='/home'>Product-Dashboard</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                localStorage.getItem('User-Info') ?
                                    <>
                                        <NavLink className='mx-2  text-green-500 no-underline text-lg hover:text-red-500' to='/'>Product List</NavLink>
                                        <NavLink className='mx-2  text-green-500 no-underline text-lg hover:text-red-500' to='/updateproduct'>UpdateProduct</NavLink>
                                        <NavLink className='mx-2  text-green-500 no-underline text-lg hover:text-red-500' to='/addproduct'>AddProduct</NavLink>
                                        <NavLink className='mx-2  text-green-500 no-underline text-lg hover:text-red-500' to='/search'>Search Product</NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink className='mx-2 text-green-500 no-underline text-lg hover:text-red-500' to='/login'>Login</NavLink>
                                        <NavLink className=' mx-2 text-green-500 no-underline text-lg hover:text-red-500' to='/register'>Register</NavLink>
                                    </>
                            }
                        </Nav>
                        {
                            localStorage.getItem('User-Info') ?
                                <NavDropdown className='text-gray-300' title={user.name}>
                                    <NavDropdown.Item onClick={Clear}>Logout</NavDropdown.Item>
                                    <NavDropdown.Item onClick={Profile}>Profile</NavDropdown.Item>
                                </NavDropdown>
                                : null
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
