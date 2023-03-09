import React, { useState } from "react";


function NameForm() {
  const [studentId, setstudentId]= useState("");
  const [studentName, setstudentName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [studentMailId, setstudentMailId] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("StudentId:", studentId);
    console.log("Student Name:", studentName);
    console.log("Father Name:", fatherName);
    console.log("Mother Name:", motherName);
    console.log("Student MailId:", studentMailId);
    console.log("Phone:", phone);
    console.log("Address:", address);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>NEET ACADEMY</h1>
      <h5>REGISTER HERE FOR YOUR BETTER FUTURE</h5>
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
    </form>
  );
}

export default NameForm;
