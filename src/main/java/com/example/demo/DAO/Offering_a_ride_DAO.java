package com.example.demo.DAO;
import java.util.List;

import org.springframework.jdbc.support.rowset.SqlRowSet;

import com.example.demo.Offering.Offering_a_ride;
import com.example.demo.Offering.Offering_a_ride_2;


public interface Offering_a_ride_DAO {

public abstract int requestOffer(Offering_a_ride_2 offering);
public abstract List<Offering_a_ride> getrequest();

	




}
