package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
public class BillettController {
    @Autowired
    BillettRepository rep;

    @PostMapping("/save")
    public void saveTickets(@RequestBody Billett ticket) {
        System.out.println(ticket);
        rep.saveTickets(ticket);
    }


    @GetMapping("/getAll")
    public List<Billett> getAllTickets() {

        return rep.getAllTickets();
    }

    @GetMapping("/getOneTicket")
    public Billett getOneTicket(Integer id) {
        return rep.getOneTicket(id);
    }

    @PostMapping("/editTicket")
    public void editTicket(@RequestBody Billett ticket) {
        rep.editTicket(ticket);
    }

    @GetMapping("/deleteOne")
    public void deleteOne(Integer id) {
        rep.deleteOne(id);
    }

    @DeleteMapping("/deleteAll")
    public void deleteAllTickets() {
        rep.deleteAllTickets();
    }

}
