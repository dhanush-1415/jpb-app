import React, { useEffect, useState } from "react";


const Pract = () => {


    const [data , setData] = useState();

    useEffect(() => {
        const fetchData = async () => {

            try{
                const response = await fetch("http://localhost:3001/products")

                const result = await response.json();

                console.log(result)
            }catch(err){
                console.log(err)
            }

        }

        fetchData();
    }, [data]);



    const handlePost =  async() => {

        try{
        const postData = {
            org: '1',
            method:'ppost'
        }

        const response = await fetch("http://localhost:3001/productsData" , {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(postData)
        })
        if(response.ok){
            const data = await response.json()
            console.log(data)
        }else{
            console.log('error')
        }
        }catch(err){
            console.log(err)
        } 
    }


    return(
        <>
        <button onClick={handlePost}>Click</button>
          {data && data.length && data.map((item , index) => (
            <h1>{item.Name}</h1>
          ))}
        </>
    )
}

export default Pract;