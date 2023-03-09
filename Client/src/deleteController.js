import { useState } from 'react';
function Delete(){
    const[studentId,setstudentId]=useState("");
    const handleClick = () => {
        fetch("http://localhost:8080/Neet?id=" + studentId,{
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(res => res.json()).then((response) => response == null ? document.getElementById("err").innerHTML = "Invalid Id" : document.getElementById("err").innerHTML = " Deleted Successfully" );
};
return(
    <>
    <input type="text"
        value={studentId}
        onChange={(e)=> setstudentId(e.target.value)}>
        </input>
        <input type="button" onClick={handleClick} value="Delete" className='button'></input>
        <br></br>
        <p id="err"></p>
    </>
);
}
export default Delete;