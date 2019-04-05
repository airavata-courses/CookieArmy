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
	public int requestOffer(Offering_a_ride_2 offering) {
		KeyHolder keyHolder = new GeneratedKeyHolder();

		jdbcTemplate.update((Connection connection) -> {
			PreparedStatement preparedStatement;
			preparedStatement = connection.prepareStatement(
					"INSERT INTO `requesting`.`request_a_ride` (`Name`, `Contact_Details`, `Source`, `Destination`, `DATE` , `Time`, `Amount`) VALUES (?,?,?,?,?,?,?);",
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
	public List<Offering_a_ride> getrequest() {
		List<Offering_a_ride> offer_a_ride_list = new ArrayList<>();
		Collection<Map<String, Object>> rows = null;
		rows = jdbcTemplate.queryForList("select * from offer_ride_view;");
		rows.stream().map((row) -> {
			Offering_a_ride o = new Offering_a_ride();
			o.setDate(String.valueOf(row.get("DATE")));
			o.setRideId(String.valueOf(row.get("ID")));
			o.setName((String) row.get("NAME"));
			o.setFrom((String) row.get("Source"));
			o.setTo((String) row.get("Destination"));
			o.setPrice((String) row.get("amount"));
			o.setTime((String) row.get("time"));
			o.setImage("https://kcl-mrcdtp.com/wp-content/uploads/sites/201/2017/05/person_icongray-300x300.png");
			return o;
		}).forEach((ss) -> {
			offer_a_ride_list.add(ss);
		});
		return offer_a_ride_list;
	}

	
	
	
}
