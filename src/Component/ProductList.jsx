import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ProductList() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetchdata();
    }, [])

    async function fetchdata() {
        let fec = await fetch('http://localhost:8000/api/list');
        fec = await fec.json();
        setdata(fec);
    }
    //console.warn('data', data);

    async function remove(id) {
        let result = await fetch(`http://localhost:8000/api/delete/${id}`, {
            method: 'DELETE',
        })
        result = await result.json();
        alert('Product has been removed', result)
        fetchdata();
    }

    return (
        <>
            <Header />
            <h1 className='text-white'>Product List</h1>
            <div className='col-sm-8 offset-sm-2'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <td>S.no.</td>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Model</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    {
                        data.map((v1, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{v1.id}</td>
                                    <td>{v1.name}</td>
                                    <td>{v1.description}</td>
                                    <td>{v1.price}</td>
                                    <td className='flex justify-center'><img className='max-w-52 max-h-28' src={`http://localhost:8000/${v1.file_path}`} /></td>
                                    <td><button className='bg-red-700 py-1 px-2 my-1 mx-1 hover:bg-red-800 rounded-lg
                                     text-white active:bg-red-700'onClick={() => remove(v1.id)}>Delete</button>
                                        <Link to={`updateproduct/${v1.id}`}><button className='bg-green-600 py-1 px-2 my-1 mx-1
                                     hover:bg-green-700 rounded-lg text-white active:bg-green-600'>Update</button></Link></td>
                                </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>
        </>
    )
}

export default ProductList
