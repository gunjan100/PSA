import React, { useEffect, useState } from 'react'
import Adminlayout from '../component/layouts/Admin-layout'
import { useAuth } from '../store/auth'

const ExpClient = () => {
    const {token} = useAuth()
    const [exprClient, setExprClient] = useState([])

    const expClient = async()=>{
        let response = await fetch('http://localhost:5000/api/cl/client/exp',{
            method:"POST",
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await response.json()
        console.log(data);
        setExprClient(data)
         
    }

    useEffect(() => {
        expClient()
    }, [])
    


  return (
    <><div className="container py-4">
    <div className="row">
      <div className="col-3">
        <Adminlayout />
      </div>
      <div className="col">
        <h4 className="custome my-4 py-2 "> Add Client </h4>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Comp. Name</th>
      <th scope="col">Standered</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    {
        exprClient.map((expItem, index)=>{
            return(
                <tr key={index}>
      <th >{index+1}</th>
      <td>{expItem.cname}</td>
      <td>{expItem.certName}</td>
      <td className='text-danger fw-bold '>{expItem.certStatus}</td>
    </tr>

            )
        })
    }
    
   
  </tbody>
</table>
        
        </div></div></div></>
  )
}

export default ExpClient