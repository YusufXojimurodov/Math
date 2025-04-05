let random = alert("Sizda hozir random sonlar chiqishni boshladi");

let randomRaqam = Math.round(Math.random() * 200);
alert("Random son: " + randomRaqam);

let malumot = alert("Hozir bizda chiqqan random sonni 2 ga ko'paytirib va 2 ga bo'lishimiz kerak");

let kopaytirish = randomRaqam * 2

let bolish = randomRaqam / 2

let foiz = randomRaqam % 2

let natija = alert("Random sonni 2 ga kopaytirganimizdagi natija : " + kopaytirish + "\n"
    + "Random sonni 2 ga bolganimizdagi natija : " + bolish + "\n"
    + "Random sonni 3 ga bolganimizdagi qoldiq : " + foiz
)
