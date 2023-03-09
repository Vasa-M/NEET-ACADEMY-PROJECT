import { useState, useEffect } from 'react';

function GetStudent(){
    const[res, setObject] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/Neet")
        .then((response)=>response.json())
        .then((result)=>setObject(result));
    },[]);

    return(
        <div className='grid'>
            <centre><h2>DETAILS</h2></centre>
            <table className='table'>
                <thead>
                    <tr>
                        <th>StudentId</th>
                        <th>StudentName</th>
                        <th>FatherName</th>
                        <th>MotherName</th>
                        <th>StudentMailId</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>

                </thead>
                <tbody>
            {
                res.map((data)=>{
                    return (
                        <tr key={data.studentId}>
                        <td>{data.studentId}</td>
                        <td>{data.studentName}</td>
                        <td>{data.fatherName}</td>
                        <td>{data.motherName}</td>
                        <td>{data.studentMailId}</td>
                        <td>{data.phone}</td>
                        <td>{data.address}</td>
            </tr>
              )
            })
        }
        </tbody>
    </table>
    </div>
    );

}
export default GetStudent;
