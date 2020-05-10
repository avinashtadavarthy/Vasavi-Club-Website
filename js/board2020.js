var board2020 = [
    {
        "vn_name": "Vn 2* KCGF T. V. RAMA KUMAR",
        "vn_desig": "President",
        "va_name": "Vn T. GAYATHRI",
        "va_desig": "Vanitha President"
    },
    {
        "vn_name": "Vn 2* KCGF M. V. N. Mahendra Babu",
        "vn_desig": "Secretary",
        "va_name": "Vn M. Amulya",
        "va_desig": "Vanitha Secretary"
    },
    {
        "vn_name": "Vn 2* KCGF Vaasthu Rangan",
        "vn_desig": "Treasurer",
        "va_name": "Vn V. VIJAYALAKSHMI",
        "va_desig": "Vanitha Treasurer"
    },
    {
        "vn_name": "Vn 2* KCGF Dr. S. RAMESH BABU",
        "vn_desig": "Director - Vocational Service",
        "va_name": "Vn GOLDEN* KCGF SUJATHA RAMESH BABU",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn DIAMOND* KCGF M. V. NARAYANA GUPTA",
        "vn_desig": "Director - Fund Raising",
        "va_name": "Vn N. MEDA JYOTHI",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 2* KCGF R. RANJITH KUMAR",
        "vn_desig": "Immediate Past President",
        "va_name": "Vn R. BALA SWETHAS SREE",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 2* KCGF SURICHETTY BALAJI",
        "vn_desig": "Director - Projects",
        "va_name": "Vn S. DIVYA BALAJI",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 3* KCGF N. R. RAVISANKARAN",
        "vn_desig": "Director - Meetings & Venues",
        "va_name": "Vn TEJOVATHI",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 5* KCGF K . RAVI KUMAR",
        "vn_desig": "Director - Tours & Entertainment",
        "va_name": "Vn R. REVATHY",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 2* KCGF Dr. P. JAYAKUMAR",
        "vn_desig": "Director - Health",
        "va_name": "Vn P. GIRIJA",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 2* KCGF K. N. SURESH BABU",
        "vn_desig": "Director - Membership Development",
        "va_name": "Vn K. VIJAYASHREE",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 2* KCGF M. JAGADISH BABU",
        "vn_desig": "Director - Special Projects",
        "va_name": "Vn VASUNDARA M",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 2* KCGF N. SRI SATYA ",
        "vn_desig": "Director - District Relations",
        "va_name": "Vn S. KIRANMAYIE",
        "va_desig": "Director"
    },
    {
        "vn_name": "Vn 2* KCGF SHYAMANAND",
        "vn_desig": "Director - Fruit Basket",
        "va_name": "Vn S. SANTHY",
        "va_desig": "Director"
    }
];

var pst = document.getElementById('boardpst');
var others = document.getElementById('boardothers');

let i = 0;
board2020.forEach(element => {
    let str = "";

    str += "<div class='boardelement'>";

    str += "<strong style='color: #b6d9ee;'> - " + element['vn_desig'].toUpperCase() + " - </strong><br><text style='font-size: 17px'>" + element['vn_name'].split('KCGF')[0] + "KCGF" + element['vn_name'].split('KCGF')[1].toProperCase() + '</text><br><br>';
    str += "<strong style='color: #b6d9ee;'> - " + element['va_desig'].toUpperCase() + " - </strong><br><text style='font-size: 17px'>" + element['va_name'].toProperCase() + '</text><br>';

    str += "</div>";

    if (i <= 2) {
        pst.innerHTML += str
    } else {
        others.innerHTML += str;
    }
    i++;
});