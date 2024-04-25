$(function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); // hent id fra URL
    const url = "/hentEnBillett?id=" + id;
    $.get(url, function (billett) {
        $("#filmValg").val(billett.film),
            $("#antall").val(billett.antallBilletter),
            $("#fnavn").val(billett.fnavn),
            $("#enavn").val(billett.enavn),
            $("#epost").val(billett.epost),
            $("#telefonNr").val(billett.telefonNr);
    });
});

function endreBillett() {
    let film = document.getElementById("filmValg").value;
    let antallBilletter = document.getElementById("antall").value;
    let fnavn = document.getElementById("fnavn").value;
    let enavn = document.getElementById("enavn").value;
    let epost = document.getElementById("epost").value;
    let telefonNr = document.getElementById("telefonNr").value;
    let feilmelding = false;

    if (film === "0") {
        document.getElementById("ugyldigValg").innerHTML = "Velg en film";
        feilmelding = true;
    }

    if (antallBilletter === null || antallBilletter <= 0) {
        document.getElementById("ugyldigAntall").innerHTML = "Oppgi gyldig antall billetter";
        feilmelding = true;
    }

    if (!gyldigFornavn(fnavn)) {
        document.getElementById("ugyldigFornavn").innerHTML = "Fyll ut gyldig fornavn";
        feilmelding = true;
    }

    if (!gyldigEtternavn(enavn)) {
        document.getElementById("ugyldigEtternavn").innerHTML = "Fyll ut gyldig etternavn";
        feilmelding = true;
    }

    if (!gyldigEpost(epost)) {
        document.getElementById("ugyldigEpost").innerHTML = "Oppgi gyldig e-postadresse";
        feilmelding = true;
    }

    if (!gyldigTelefonNr(telefonNr)) {
        document.getElementById("ugyldigTelefonNr").innerHTML = "Oppgi gyldig telefonnummer";
        feilmelding = true;
    }

    if (!feilmelding) {
        let billettData = {
            film: film,
            antallBilletter: antallBilletter,
            fnavn: fnavn,
            enavn: enavn,
            epost: epost,
            telefonNr: telefonNr
        };

        $.ajax({
            url: '/endreBillett',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(billettData),
            success: function () {
                window.location.href = "index.html";
            },
            error: function (error) {
                console.log('Feil ved oppdatering av billett: ', error);
            }
        });
    }
}

function gyldigFornavn(fnavn) {
    let re = /^([a-zæøåA-ZÆØÅ]{3,20})$/;
    return re.test(fnavn);
}

function gyldigEtternavn(enavn) {
    let re = /^([a-zæøåA-ZÆØÅ]{3,20})$/;
    return re.test(enavn);
}

function gyldigEpost(epost) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(epost).toLowerCase());
}

function gyldigTelefonNr(telefonNr) {
    let re = /^\+?[0-9]{8,15}$/;
    return re.test(telefonNr);
}

function getAll() {
    console.log('Henter alle filmer')
    $.ajax({
        url: '/hentAlle',
        type: 'GET',
        contentType: 'application/json',
        success: function (response) {
            console.log('Alle filmene: ', response);
        },
        error: function (error) {
            console.log('Feil: ', error);
        }
    });
}
