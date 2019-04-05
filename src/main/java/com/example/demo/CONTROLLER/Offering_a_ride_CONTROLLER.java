package com.example.demo.CONTROLLER;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DAO.Offering_a_ride_DAO;
import com.example.demo.Offering.Offering_a_ride;
import com.example.demo.Offering.Offering_a_ride_2;

@CrossOrigin(origins = {"http://149.165.157.87:8100","http://149.165.157.145:8082"})
@RestController
public class Offering_a_ride_CONTROLLER {

@Autowired Offering_a_ride_DAO offering_a_ride_DAO;
	
	
	
	@RequestMapping(value="/request",method=RequestMethod.POST)
	public boolean requestOffer(@RequestBody Offering_a_ride_2 offering){
		offering_a_ride_DAO.requestOffer(offering);
		//return new ResponseEntity<>("Your Offer is created Successfully",HttpStatus.OK);
		return true;
	}
	
	@RequestMapping(value="/request",method=RequestMethod.GET)
	public ResponseEntity<Object> getrequest(){
		return new ResponseEntity<>(offering_a_ride_DAO.getrequest(),HttpStatus.OK);

	}
	

	
	
	}

