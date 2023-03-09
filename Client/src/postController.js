import { useState } from "react";
import "./form.css";

function PostController() {
  const [studentId, setstudentId]= useState("");
  const [studentName, setstudentName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [studentMailId, setstudentMailId] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    const Student =
    {
        studentId,
        studentName,
        fatherName,
        motherName,
        studentMailId,
        address,
        phone,
    };
    fetch("http://localhost:8080/Neet",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(Student),
        }).then(document.getElementById("err").innerHTML="New Student Added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student Id:
        <input
          type="text"
          placeholder="Enter your student ID"
          value={studentId}
          onChange={(e) => setstudentId(e.target.value)}
        />
      </label>
      <label>
        Student Name:
        <input
          type="text"
          placeholder="Enter your student name"
          value={studentName}
          onChange={(e) => setstudentName(e.target.value)}
        />
      </label>
      
      <label>
        Father Name:
        <input
          type="text"
          placeholder="Enter Father Name"
          value={fatherName}
          onChange={(e) => setfatherName(e.target.value)}
        />
      </label>
      <label>
        Mother Name:
        <input
          type="text"
          placeholder="Enter Mother Name"
          value={motherName}
          onChange={(e) => setmotherName(e.target.value)}
        />
      </label>
      <label>
        Student Mail-Id:
        <input
          type="text"
          placeholder="Enter Student Mail-Id"
          value={studentMailId}
          onChange={(e) => setstudentMailId(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      <br></br>
      <p id="err"></p>
    </form>
  );
}
export default PostController;