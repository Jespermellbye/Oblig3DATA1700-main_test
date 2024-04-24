$(function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); // get id from URL
    const url = "/getOneTicket?id=" + id;
    $.get(url, function (ticket) {
        $("#movieSelect").val(ticket.movie),
            $("#number").val(ticket.numberOfTickets),
            $("#fname").val(ticket.fname),
            $("#lname").val(ticket.lname),
            $("#email").val(ticket.email),
            $("#phone").val(ticket.phone);
    });
});

function editTicket(ticket) {
    console.log("wtf is going on here")
    localStorage.setItem('ticket', JSON.stringify(ticket));
    let movie = document.getElementById("movieSelect").value;
    let numberOfTickets = document.getElementById("number").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let errorMessage = false;

    if (movie === "0") {
        document.getElementById("invalidChoice").innerHTML = "Please select a movie";
        errorMessage = true;
    }

    if (numberOfTickets === null || numberOfTickets <= 0) {
        document.getElementById("invalidNumber").innerHTML = "Please enter a valid amount of tickets";
        errorMessage = true;
    }
    // The following if-statements refer to the regex functions defined further below.
    if (!validFirstName(fname)) {
        document.getElementById("invalidFirstName").innerHTML = "Please fill out your first name, 3-20 alphabetical characters";
        errorMessage = true;
    }

    if (!validLastName(lname)) {
        document.getElementById("invalidLastName").innerHTML = "Please fill out your last name, 3-20 alphabetical characters";
        errorMessage = true;
    }

    if (!validEmail(email)) {
        document.getElementById("invalidEmail").innerHTML = "Please enter a valid email adress";
        errorMessage = true;
    }

    if (!validPhone(phone)) {
        document.getElementById("invalidPhone").innerHTML = "Please enter a valid phone number";
        errorMessage = true;
    }
    // If all the validations above pass, the input gets set
    if (!errorMessage) {
        let ticketInput = {
            movie: movie,
            numberOfTickets: numberOfTickets,
            fname: fname,
            lname: lname,
            email: email,
            phone: phone
        }

        console.log('ticketInput ', ticketInput);
        $.ajax({
            url: '/editTicket',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(ticketInput),
            success: function() {
                window.location.href = "index.html";
            },
            error: function(error) {
                console.log('Error: ', error);
            }
        });
    }
}

function validFirstName(fname) {
    let re = /^([a-zæøåA-ZÆØÅ]{3,20})$/;
    return re.test(fname);
}

function validLastName(lname) {
    let re = /^([a-zæøåA-ZÆØÅ]{3,20})$/;
    return re.test(lname);
}

function validEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Phone validation function that can also start with a + sign for country code and an international standard maximum of 15 characters.
// Checked with regexr.com
function validPhone(phone) {
    let re = /^\+?[0-9]{8,15}$/; // Sourced from https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    return re.test(phone);
}

function getAll() {
    console.log('getAll fam')
    $.ajax({
        url: '/getAll',
        type: 'GET',
        contentType: 'application/json',
        success: function (response) {
            console.log('ALL THE FILMS ', response);
            //displayTicketTable(response);
        },
        error: function (error) {
            console.log('Error: ', error);
        }
    });
}

