
package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Neet;
import com.example.demo.service.ApiService;

@RestController
@CrossOrigin
public class ApiController 
{
	@Autowired
	ApiService service;
	
	@PostMapping("/Neet")
	public String add(@RequestBody Neet neet)
	{
		return service.addNeet(neet);
	}
	
	@GetMapping("/Neet")
	public List<Neet> grt()
	{
		return service.getNeet();
	}
	
	@GetMapping("/Neet/{id}")
	public Optional<Neet> readyById(@PathVariable int id)
	{
		return service.getNeetById(id);
	}
	
	@PutMapping("/Neet/{id}")
	public Optional<Neet> update(@RequestBody Neet neet,@PathVariable int id)
	{
		return service.updateNeet(neet,id);
		
	}
	
	@DeleteMapping("/Neet")
	public Optional<Neet> delete(@RequestParam int id)
	{
		return service.deleteNeetById(id);
	}

}
