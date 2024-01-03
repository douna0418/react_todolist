import Edit from './components/Edit';
import List from './components/List';
import './index.css';
import { useState, useEffect } from 'react';

const Home = () => {

    const [data, setData] = useState([]);

    async function fetchData (setData){
        const res = await fetch('http://localhost:3000/post')
        // console.log(res.json(), 'res')
        const { data }  = await res.json();
        // console.log(setData)
        setData(data)
    }
    async function fetchSetData (data){
        await fetch('http://localhost:3000/post',{
            method: 'PUT',
            headers: {
                "Content-type": "applcation/json"
            },
            body: JSON.stringify( {data} )   
        })
    }
    useEffect(() => {
        fetchSetData(data)
    }, [data]) 
    useEffect(() => {
        fetchData(setData)
    }, []) 

    return <div className='app'>
        <Edit add={setData}/>
        <List listData={data} setData={setData}/>
    </div>
}

export default Home;

// de.json  https://www.npmjs.com/package/json-server
