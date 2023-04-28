import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Axios.scss'

const Axios = () => {
    const [data, setdata] = useState([])


    const GetData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            setdata(response.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        GetData()
        
    }, [])
    console.log(data);
    

  return (
    <div className='div'>
        {
            data.map((data) => (
                <li className='li' key={data.id}>
                    <img src={data.flags.svg} alt="hello" />
                    <h2>name : {data.name.common}</h2>
                    <p>capital : {data.capital}</p>
                    <p>region : {data.region}</p>
                </li>
            ))   
        }
    </div>

  )
}

export default Axios

