package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Neet;
import com.example.demo.repository.NEETrepo;

@Service
public class ApiService 
{	
	@Autowired
	NEETrepo repository;
	public String addNeet(Neet neet) 
	{
		repository.save(neet);
		return "Added";
	}
	public List<Neet> getNeet()
	{
		return repository.findAll();
	}
	public Optional<Neet> getNeetById(int id)
	{
		return repository.findById(id);
	}
	
	public Optional<Neet> updateNeet(Neet newNeet,int id)
	{
		Optional<Neet> neet = repository.findById(id);
		neet.get().setStudentId(newNeet.getStudentId());
		neet.get().setStudentName(newNeet.getStudentName());
		neet.get().setFatherName(newNeet.getFatherName());
		neet.get().setMotherName(newNeet.getMotherName());
		neet.get().setStudentMailId(newNeet.getStudentMailId());
		neet.get().setPhone(newNeet.getPhone());
		neet.get().setAddress(newNeet.getAddress());
		repository.save(neet.get());
		return neet;
	}
	
	public Optional<Neet> deleteNeetById(int id)
	{
		Optional<Neet> neet = repository.findById(id);
		System.out.print(neet);
		repository.deleteById(id);
		return neet;
	}
}
