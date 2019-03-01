package com.example.demo.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.example.demo.Offering.Offering_a_ride;
import com.example.demo.Offering.Offering_a_ride_2;

@Repository
public class Offering_a_ride_DAOIMPL implements Offering_a_ride_DAO {

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public int createOffer(Offering_a_ride_2 offering) {
		KeyHolder keyHolder = new GeneratedKeyHolder();

		jdbcTemplate.update((Connection connection) -> {
			PreparedStatement preparedStatement;
			preparedStatement = connection.prepareStatement(
					"INSERT INTO `offering`.`offering_a_ride` (`Name`, `Contact_Details`, `Source`, `Destination`, `DATE` , `Time`, `Amount`) VALUES (?,?,?,?,?,?,?);",
					Statement.RETURN_GENERATED_KEYS);
			preparedStatement.setString(1, offering.getName());
			preparedStatement.setString(2, offering.getContact_details());
			preparedStatement.setString(3, offering.getSource());
			preparedStatement.setString(4, offering.getDestination());
			preparedStatement.setString(5, offering.getDate());
			preparedStatement.setString(6, offering.getTime());
			preparedStatement.setString(7, offering.getAmount());
			return preparedStatement;
		}, keyHolder);

		return keyHolder.getKey().intValue();
	}

	@Override
	public List<Offering_a_ride> getOfferss() {
		List<Offering_a_ride> offer_a_ride_list = new ArrayList<>();
		Collection<Map<String, Object>> rows = null;
		rows = jdbcTemplate.queryForList("select * from offer_ride_view;");
		rows.stream().map((row) -> {
			Offering_a_ride o = new Offering_a_ride();
			o.setDate((String) row.get("DATE"));
			o.setRideid(String.valueOf(row.get("ID")));
			o.setName((String) row.get("NAME"));
			o.setSource((String) row.get("Source"));
			o.setDestination((String) row.get("Destination"));
			o.setAmount((String) row.get("amount"));
			o.setTime((String) row.get("time"));
			return o;
		}).forEach((ss) -> {
			offer_a_ride_list.add(ss);
		});
		return offer_a_ride_list;
	}

	@Override
	public void confirm_a_passenger(Offering_a_ride_2 offering) {
		jdbcTemplate.update("update `offering`.`offering_a_ride` set PASSENGER3=CASE 	WHEN PASSENGER1 <> 'Available' AND PASSENGER2<>'Available' AND PASSENGER3='Available' then ? else PASSENGER3  END,PASSENGER2=CASE WHEN PASSENGER1 <> 'Available' AND PASSENGER2='Available' AND PASSENGER3='Available' then ? else PASSENGER2 END,PASSENGER1=CASE WHEN PASSENGER1='Available' AND PASSENGER2='Available' AND PASSENGER3='Available'"
				+ "  then ? else PASSENGER1 END  WHERE id=?;",
				new Object[] { offering.getPassenger1(), offering.getPassenger2(), offering.getPassenger3(), offering.getRideid() });
		System.out.println(offering.getPassenger1());
		System.out.println(offering.getPassenger2());
		System.out.println(offering.getPassenger3());
		System.out.println(offering.getRideid());

	}

	@Override
	public List<Offering_a_ride_2> offering_history(Offering_a_ride_2 o) {
		// Offering_a_ride_2 o=new Offering_a_ride_2();
		List<Offering_a_ride_2> offer_a_ride_list = new ArrayList<>();
		Collection<Map<String, Object>> rows = null;
		Object p[] = { o.getPassenger1(), o.getPassenger2(), o.getPassenger3() };
		String sql = "select Date,SOURCE,Destination,Name from `offering`.`offering_a_ride` where Passenger1 like ? or Passenger2 like ? or Passenger3 like ? order by NAME;";
		rows = jdbcTemplate.queryForList(sql, p);
		rows.stream().map((row) -> {

			o.setDate((String) row.get("DATE"));
			o.setSource((String) row.get("Source"));
			o.setDestination((String) row.get("Destination"));
			o.setName((String) row.get("Name"));
			o.setPassenger1((String) row.get("Passenger1"));
			o.setPassenger2((String) row.get("Passenger2"));
			o.setPassenger3((String) row.get("Passenger3"));
			return o;
		}).forEach((ss) -> {
			offer_a_ride_list.add(ss);
		});
		return offer_a_ride_list;
	}

	@Override
	public String getEmployeeName(Offering_a_ride_2 offering) {
		String sql = "select Date,SOURCE,Destination,Name from offering_a_ride where Passenger1 like ? or Passenger2 like ? or Passenger3 like ?;";
		String name = jdbcTemplate.queryForObject(sql,
				new Object[] { offering.getPassenger1(), offering.getPassenger2(), offering.getPassenger3() },
				String.class);

		System.out.println(offering.getPassenger1());
		System.out.println(offering.getPassenger2());
		System.out.println(offering.getPassenger3());

		return name;
	}

	@Override
	public List<Offering_a_ride_2> confirmation_history(Offering_a_ride_2 o) {
		// Offering_a_ride_2 o=new Offering_a_ride_2();
		List<Offering_a_ride_2> offer_a_ride_list = new ArrayList<>();
		Collection<Map<String, Object>> rows = null;
		String sql = "select Date,SOURCE,Destination,Passenger1,Passenger2,Passenger3 from offering_a_ride where name like ?;";
		rows = jdbcTemplate.queryForList(sql, new Object[] { o.getName() });
		rows.stream().map((row) -> {
			// Offering_a_ride_2 o=new Offering_a_ride_2();
			o.setDate((String) row.get("DATE"));
			o.setSource((String) row.get("Source"));
			o.setDestination((String) row.get("Destination"));
			o.setName((String) row.get("Name"));
			o.setPassenger1((String) row.get("Passenger1"));
			o.setPassenger2((String) row.get("Passenger2"));
			o.setPassenger3((String) row.get("Passenger3"));
			return o;
		}).forEach((ss) -> {
			offer_a_ride_list.add(ss);
		});
		return offer_a_ride_list;
	}

	
	
}
