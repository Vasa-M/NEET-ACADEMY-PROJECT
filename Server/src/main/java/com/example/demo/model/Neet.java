package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Neet 
{
	@Id
	private int StudentId;
	private String StudentName;	
	private String FatherName;
	private String MotherName;
	private String StudentMailId;
	private String Phone;
	private String Address;
	
	public int getStudentId() {
		return StudentId;
	}
	public void setStudentId(int studentId) {
		StudentId = studentId;
	}
	public String getStudentName() {
		return StudentName;
	}
	public void setStudentName(String studentName) {
		StudentName = studentName;
	}

	public String getFatherName() {
		return FatherName;
	}
	public void setFatherName(String fatherName) {
		FatherName = fatherName;
	}
	public String getMotherName() {
		return MotherName;
	}
	public void setMotherName(String motherName) {
		MotherName = motherName;
	}
	public String getStudentMailId() {
		return StudentMailId;
	}
	public void setStudentMailId(String studentMailId) {
		StudentMailId = studentMailId;
	}
	public String getPhone() {
		return Phone;
	}
	public void setPhone(String phone) {
		Phone = phone;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	
	@Override
	public String toString() {
		return "Neet [StudentId=" + StudentId + ", StudentName=" + StudentName 
				+ ", FatherName=" + FatherName + ", MotherName=" + MotherName + ", StudentMailId=" + StudentMailId
				+ ", Phone=" + Phone + ", Address=" + Address + "]";
	}
}
