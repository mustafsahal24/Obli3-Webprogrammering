function regBillett() {
    $("#errorFilm").html(" ");
    $("#errorSeter").html(" ");
    $("#errorFornavn").html(" ");
    $("#errorEtternavn").html(" ");
    $("#errorMail").html(" ");
    $("#errorTlf").html(" ");

    const filmVerdi = $("#film").val();
    const seterVerdi = $("#seter").val();
    const fornavnVerdi = $("#fornavn").val();
    const etternavnVerdi = $("#etternavn").val();
    const mailVerdi = $("#mail").val();
    const sjekkMail = /^[\w\.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const tlfVerdi = $("#tlf").val();

    if (filmVerdi === "") {
        $("#errorFilm").html("<span style='color:blueviolet; font-weight:normal;'> Velg en film! </span>");
        return;
    }
    if (isNaN(seterVerdi) || !Number.isInteger(Number(seterVerdi)) || Number(seterVerdi) <= 0) {
        $("#errorSeter").html("<span style='color:blueviolet; font-weight:normal;'>Skriv inn antall seter! </span>");
        return;
    }
    if (fornavnVerdi.trim() === "" || /^\d+$/.test(fornavnVerdi)) {
        $("#errorFornavn").html("<span style='color:blueviolet; font-weight:normal;'> Skriv inn fornavnet ditt! </span>");
        return;
    }
    if (etternavnVerdi.trim() === "" || /^\d+$/.test(etternavnVerdi)) {
        $("#errorEtternavn").html("<span style='color:blueviolet; font-weight:normal;'>Skriv inn etternavnet ditt!</span>");
        return;
    }
    if (!sjekkMail.test(mailVerdi)) {
        $("#errorMail").html("<span style='color:blueviolet; font-weight:normal;'> Skriv inn mailen din! </span>");
        return;
    }
    if (!/^\d{8}$/.test(tlfVerdi)) {
        $("#errorTlf").html("<span style='color:blueviolet; font-weight:normal;'> Telefonnummeret må være 8 sifre og bestå av tall! </span>");
        return;
    }

    const billett = {
        film: filmVerdi,
        seter: seterVerdi,
        fornavn: fornavnVerdi,
        etternavn: etternavnVerdi,
        mail: mailVerdi,
        tlf: tlfVerdi,
    };

    $.post("/lagre", billett, function () {
        hentAlle();

        window.location.href = "/";
    });
}