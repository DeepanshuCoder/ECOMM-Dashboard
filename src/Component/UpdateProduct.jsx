import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

function UpdateProduct() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        let result = await fetch(`http://localhost:8000/api/getproduct/${id}`);
        result = await result.json();
        setData(result);
        setName(result.name);
        setFile(result.file);
        setDescription(result.description);
        setPrice(result.price);
    }

    async function updatedata(id) {
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('file', file);
        formdata.append('description', description);
        formdata.append('price', price);
        let fec = await fetch(`http://localhost:8000/api/updateproduct/${id}?_method=PUT`, {
            method: 'POST',
            body: formdata
        });
        alert('Data has been Successfully Updated');
    }
    return (
        <>
            <Header />
            <h1 className='text-white'>UpdateProduct Page</h1>
            <input className='bg-slate-500 rounded-lg px-5 py-1 text-center'
                type="text" defaultValue={data.name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input className='bg-slate-500 rounded-lg py-0.5 text-center'
                type="file" defaultValue={data.file_path} onChange={(e) => setFile(e.target.files[0])} /><br /><br />
            <input className='bg-slate-500 rounded-lg px-5 py-1 text-center'
                type="text" defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
            <input className='bg-slate-500 rounded-lg px-5 py-1 text-center'
                type="text" defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} /><br /><br />
            <span className='flex justify-center'><img className='max-w-52 max-h-28'
                src={`http://localhost:8000/${data.file_path}`} /></span> <br />
            <button className='btn btn-primary' onClick={() => updatedata(data.id)}>Update product</button>
        </>
    )
}

export default UpdateProduct
