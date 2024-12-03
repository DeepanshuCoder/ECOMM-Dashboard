import React, { useState } from 'react'
import Header from './Header'

function AddProduct() {
    function def(e) {
        e.preventDefault();
    }
    const [name, setName] = useState();
    const [file, setFile] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    async function product() {
        const item = { name, file, description, price };
        console.warn(item);
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('file', file);
        formdata.append('description', description);
        formdata.append('price', price);
        let fec = await fetch("http://localhost:8000/api/product", {
            method: 'POST',
            body: formdata
        });
        alert('Data has been Successfully Saved');
    }
    return (
        <>
            <Header />
            <h1 className='text-white'>AddProduct Page</h1>
            <form onSubmit={def}>
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    placeholder='Name' type="text" onChange={(e) => setName(e.target.value)} /><br />
                <input className='my-3 bg-slate-500 rounded-lg py-0.5 text-center'
                    placeholder='file' type="file" onChange={(e) => setFile(e.target.files[0])} /><br />
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    placeholder='Description' type="text" onChange={(e) => setDescription(e.target.value)} /><br />
                <input className='my-3 bg-slate-500 rounded-lg px-5 py-1 text-center'
                    placeholder='Price' type="text" onChange={(e) => setPrice(e.target.value)} /><br />
                <button onClick={product} className='btn btn-primary'>Add Product</button>
            </form>
        </>
    )
}

export default AddProduct
