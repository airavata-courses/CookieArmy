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

@CrossOrigin(origins = {"http://149.165.168.54:8100","http://149.165.157.87:8082","http://149.165.170.25:3000"})
@RestController
public class Offering_a_ride_CONTROLLER {

@Autowired Offering_a_ride_DAO offering_a_ride_DAO;
	
	
	@RequestMapping(value="/offering",method=RequestMethod.GET)
	public ResponseEntity<Object> getOffers(){
		return new ResponseEntity<>(offering_a_ride_DAO.getOfferss(),HttpStatus.OK);

	}

	@RequestMapping(value="/history",method=RequestMethod.GET)
	public ResponseEntity<Object> offering_history(@RequestBody Offering_a_ride_2 offering){
		//commit for testing Jenkins
		//offering_a_ride_DAO.offering_history(offering);
		 return new ResponseEntity<>(offering_a_ride_DAO.offering_history(offering),HttpStatus.OK);
	}

	@RequestMapping(value="/offering",method=RequestMethod.POST)
	public boolean createOffer(@RequestBody Offering_a_ride_2 offering){
		offering_a_ride_DAO.createOffer(offering);
		//return new ResponseEntity<>("Your Offer is created Successfully",HttpStatus.OK);
		return true;
	}
	
	@RequestMapping(value="/confirm",method=RequestMethod.POST)
	//public ResponseEntity<Object> confirm_a_passenger(@RequestBody Offering_a_ride_2 offering,@PathVariable("id") String id){
	//public ResponseEntity<Object> confirm_a_passenger(@RequestBody Offering_a_ride_2 offering){
	public boolean confirm_a_passenger(@RequestBody Offering_a_ride_2 offering){
		
		offering_a_ride_DAO.confirm_a_passenger(offering);
		//return new ResponseEntity<>("Profile is updated Successfully",HttpStatus.OK);
		return true;	
	}

	
	@RequestMapping(value="/offered",method=RequestMethod.GET)
	public ResponseEntity<Object> confirmation_history(@RequestBody Offering_a_ride_2 offering){
		//offering_a_ride_DAO.offering_history(offering);
		 return new ResponseEntity<>(offering_a_ride_DAO.confirmation_history(offering),HttpStatus.OK);
	}

	
	
	}

