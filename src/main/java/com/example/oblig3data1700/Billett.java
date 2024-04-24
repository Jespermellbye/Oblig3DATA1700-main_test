package com.example.oblig3data1700;

public class Billett {
    private String movie;
    private String numberOfTickets;
    private String fname;
    private String lname;
    private String email;
    private String phone;
    private int id;

    public Billett(){

    }

    public Billett(String movie, String numberOfTickets, String fname, String lname, String email, String phone, int id) {
        this.movie = movie;
        this.numberOfTickets = numberOfTickets;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }

    public String getMovie() {
        return this.movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getNumberOfTickets() {
        return this.numberOfTickets;
    }

    public void setNumberOfTickets(String numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }

    public String getFname() {
        return this.fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return this.lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
