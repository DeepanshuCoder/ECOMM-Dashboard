import React, { useState } from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'

function SearchProduct() {
    const [data, setData] = useState([]);
    async function search(key) {
        if (key.length > 0) {
            let result = await fetch(`http://localhost:8000/api/search/${key}`);
            result = await result.json();
            console.warn(result);
            setData(result);
        }
    }
    return (
        <>
            <Header />
            <div className='col-sm-8 offset-sm-2'>
                <h1 className='my-3 text-white'>Search Product</h1>
                <input
                    className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    onChange={(e) => search(e.target.value)}
                    type="text"
                    placeholder='Search Product'
                />
                {/* {
                    data.length > 0 ? */}
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <td>S.no.</td>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Description</td>
                                    <td>Price</td>
                                    <td>Model</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    data.map((v1, i) => (
                                        <tr key={v1.id}> {/* Use v1.id as a unique key */}
                                            <td>{i + 1}</td>
                                            <td>{v1.id}</td>
                                            <td>{v1.name}</td>
                                            <td>{v1.description}</td>
                                            <td>{v1.price}</td>
                                            <td className='flex justify-center'>
                                                <img
                                                    className='max-w-52 max-h-28'
                                                    src={`http://localhost:8000/${v1.file_path}`}
                                                    alt={v1.name} // Add alt text for accessibility
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">No products found</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table> 
                        {/* : <h3 className='text-lg text-slate-500'>search your product</h3>
                } */}
            </div>
        </>
    )
}

export default SearchProduct
