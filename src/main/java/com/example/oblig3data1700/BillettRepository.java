package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void saveTickets(Billett inTickets) {

        System.out.println("tickets " + inTickets);

        String sql = "INSERT INTO Tickets (movie, numberOfTickets, fname, lname, email, phone) VALUES(?,?,?,?,?,?)";
        db.update(sql,
                inTickets.getMovie(),
                inTickets.getNumberOfTickets(),
                inTickets.getFname(),
                inTickets.getLname(),
                inTickets.getEmail(),
                inTickets.getPhone());
    }

    public List<Billett> getAllTickets() {
        String sql = "SELECT * FROM Tickets";
        List<Billett> allTickets = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        System.out.println(allTickets);
        return allTickets;
    }

    public Billett getOneTicket(Integer id) {
        String sql = "SELECT * FROM Tickets WHERE id=?";
        Object[] param = new Object[]{id};
        List<Billett> result = db.query(sql, param, BeanPropertyRowMapper.newInstance(Billett.class));
        if (result.isEmpty()) {
            return null;
        } else {
            return result.get(0);
        }
    }
    public void editTicket(Billett inTickets){
        String sql = "UPDATE Tickets SET movie=?, numberOfTickets=?, fname=?, lname=?, email=?, phone=? WHERE id=?";
        db.update(sql,
                inTickets.getMovie(),
                inTickets.getNumberOfTickets(),
                inTickets.getFname(),
                inTickets.getLname(),
                inTickets.getEmail(),
                inTickets.getPhone(),
                inTickets.getId());
    }
    public void deleteOne(Integer id) {
        String sql = "DELETE FROM Tickets WHERE id=?";
        db.update(sql,id);
    }


    public void deleteAllTickets() {
        String sql = "DELETE FROM Tickets";
        db.update(sql);
    }
}
