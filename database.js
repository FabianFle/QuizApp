let questions = [
    { //HTML

        "category": "HTML",
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bierber",
        "right_answer": 3
    },
    {
        "category": "HTML",
        "question": "Wie fügt man ein Bild ein? <br> <p>Hinweis: Den Punkt nach der Klammer(<) bitte ignorieren.</p>",
        "answer_1": "<.picture='...'>",
        "answer_2": "<.body img='...' alt='...'>",
        "answer_3": "<.href src='...' alt='...'>",
        "answer_4": "<.img src='...' alt='...''>",
        "right_answer": 4
    },
    {
        "category": "HTML",
        "question": "Mit welchem HTML-Element wird ein Text kursiv geschrieben?",
        "answer_1": "< k >",
        "answer_2": "< p >",
        "answer_3": "< u >",
        "answer_4": "< i >",
        "right_answer": 4
    },
    {
        "category": "HTML",
        "question": "Welche Aussage stimmt nicht?",
        "answer_1": "HTML-Dateien können in jedem Browser geöffnet werden",
        "answer_2": "HTML-Dateien können mit jedem beliebigen Editor erstellt werden",
        "answer_3": "HTML ist eine Programmiersprache",
        "answer_4": "HTML ist für Webseiten",
        "right_answer": 3
    },
    {
        "category": "HTML",
        "question": "Was ist <b>Kein</b> HTML Tag? <br> <p>Hinweis: Den Punkt nach der Klammer(<) bitte ignorieren.</p>",
        "answer_1": "<.border></border>",
        "answer_2": "<.body></body>",
        "answer_3": "<.div></div>",
        "answer_4": "<.h1></h1>",
        "right_answer": 1
    },
    {
        "category": "HTML",
        "question": "Wie viele Tags enthält ein reguläres Element?",
        "answer_1": "1",
        "answer_2": "2",
        "answer_3": "3",
        "answer_4": "4",
        "right_answer": 2
    },

//#####################################################################################################

    {//CSS

        "category": "CSS",
        "question": "Was ist CSS?",
        "answer_1": "Eine Programmiersprache",
        "answer_2": "Eine Computersprache um Websites aufzubauen und zu strukturieren",
        "answer_3": "Eine JS funktion",
        "answer_4": " Weiß ich nicht",
        "right_answer": 2
    },
    {
        "category": "CSS",
        "question": "Wie werden Kommentare in CSS hinzugefügt? <br> <p>Hinweis: Den Punkt nach der Klammer(<) bitte ignorieren.</p>",
        "answer_1": "/* das ist ein Kommentar */",
        "answer_2": "// das ist ein Kommentar //",
        "answer_3": "// das ist ein Kommentar",
        "answer_4": "<.!-- das ist ein Kommentar-->",
        "right_answer": 1
    },
    {
        "category": "CSS",
        "question": "Mit welcher Eigenschaft wird die Textfarbe verändert?",
        "answer_1": "fontcolor:",
        "answer_2": "font-color:",
        "answer_3": "color:",
        "answer_4": "textcolor:",
        "right_answer": 3
    },
    {
        "category": "CSS",
        "question": "Was ist der Inhalt eines Stylesheets?",
        "answer_1": "Ersatzangaben für die font-Tags",
        "answer_2": "Formatangaben zur Darstellung eines Webdokuments",
        "answer_3": "Angaben, die verschiedene Inhalte der Website miteinander verbinden",
        "answer_4": "Struktur der Website",
        "right_answer": 2
    },
    {
        "category": "CSS",
        "question": "Was ist <b>keine</b> CSS eigenschaft?",
        "answer_1": "border",
        "answer_2": "font-family",
        "answer_3": "cursor",
        "answer_4": "onload",
        "right_answer": 4
    },
    {
        "category": "CSS",
        "question": "Wie kann man CSS auf eine HTML Seite einbinden? <br> <p>Hinweis: Den Punkt nach der Klammer(<) bitte ignorieren.</p>",
        "answer_1": "<.header></header>",
        "answer_2": "<.script></script>",
        "answer_3": "<.style></style>",
        "answer_4": "<.body></body>",
        "right_answer": 3
    },

//#####################################################################################################

    {//JS

        "category": "JS",
        "question": "Wie heißt der Erfinder von JavaScript?",
        "answer_1": "Douglas Crockford",
        "answer_2": "John Resig",
        "answer_3": "Brendan Eich",
        "answer_4": "Chuck Norris",
        "right_answer": 3
    },
    {
        "category": "JS",
        "question": "JavaScript ist ein/e....?",
        "answer_1": "Freamwork",
        "answer_2": "Programmiersprache",
        "answer_3": "Desinsprache",
        "answer_4": "CMD Sprache",
        "right_answer": 2
    },
    {
        "category": "JS",
        "question": "Wo schreibt man den JavaScript code rein? <br> <p>Hinweis: Den Punkt nach der Klammer(<) bitte ignorieren.</p>",
        "answer_1": "<.header></header>",
        "answer_2": "<.style></style>",
        "answer_3": "<.script></script>",
        "answer_4": "<.body></body>",
        "right_answer": 3
    },
    {
        "category": "JS",
        "question": "Worum handelt es sich hierbei: for (let i = 0; i < 0; i++) {}?",
        "answer_1": "Array",
        "answer_2": "Funktion",
        "answer_3": "String",
        "answer_4": "For-Schleife",
        "right_answer": 4
    },
    {
        "category": "JS",
        "question": "Wie hieß JavaScript früher? ",
        "answer_1": "Live Script",
        "answer_2": "Java",
        "answer_3": "TypeScript",
        "answer_4": "Seit anfang an heißt es JavaScript",
        "right_answer": 1
    },
    {
        "category": "JS",
        "question": "Wie lautet die korrekte JavaScript-Syntax, um den Inhalt des unten stehenden HTML-Elements zu ändern? <br> <.p id='demo'>Dies ist eine Demonstration.</p> <br> Hinweis: Die doppelten Anführungszeichen wurden durch (') ersetzt.",
        "answer_1": "document.getElementByName('p').innerHTML = 'Hello World!';",
        "answer_2": "#demo.innerHTML = 'Hello World!';",
        "answer_3": "document.getElement('p').innerHTML = 'Hello World!';",
        "answer_4": "document.getElementById('demo').innerHTML = 'Hello World!';",
        "right_answer": 4
    },

//#####################################################################################################

    {//Galaxy

        "category": "Galaxy",
        "question": "Wie lange dauert es, bis man eine veränderung der Sonne, auf der Erde sieht?",
        "answer_1": "1 Stunde",
        "answer_2": "8 Minuten",
        "answer_3": "Sofort",
        "answer_4": "20 Minuten",
        "right_answer": 2
    },
    {
        "category": "Galaxy",
        "question": "Wie viele Planeten hat unsere Sonnensystem?",
        "answer_1": "6",
        "answer_2": "8",
        "answer_3": "10",
        "answer_4": "12",
        "right_answer": 2
    },
    {
        "category": "Galaxy",
        "question": "Wie groß ist die Erde?",
        "answer_1": "5.349 km",
        "answer_2": "7.432 km",
        "answer_3": "6.334 km",
        "answer_4": "6.371 km",
        "right_answer": 4
    },
    {
        "category": "Galaxy",
        "question": "An welcher stelle steht unsere Erde im Sonnensystem?",
        "answer_1": "3",
        "answer_2": "4",
        "answer_3": "5",
        "answer_4": "6",
        "right_answer": 1
    },
    {
        "category": "Galaxy",
        "question": "Welcher Planet unseres Sonnensystems hat die meisten Monde?",
        "answer_1": "Jupita",
        "answer_2": "Saturn",
        "answer_3": "Uranus",
        "answer_4": "Neptun",
        "right_answer": 2
    },
    {
        "category": "Galaxy",
        "question": "Welcher der folgenden Planeten hat Ringe?",
        "answer_1": "Merkur",
        "answer_2": "Venus",
        "answer_3": "Mars",
        "answer_4": "Saturn",
        "right_answer": 4
    },
    {
        "category": "Galaxy",
        "question": "Wie schnell ist Lichtgeschwindikeit?",
        "answer_1": "299.792 km pro Sekunde",
        "answer_2": "499.842 km pro Sekunde",
        "answer_3": "199.994 km pro Sekunde",
        "answer_4": "188.759.954 km pro Minute",
        "right_answer": 1
    },
    {
        "category": "Galaxy",
        "question": "Wer gilt <b>nicht</b> mehr als Planet?",
        "answer_1": "Merkur",
        "answer_2": "Neptun",
        "answer_3": "Uranus",
        "answer_4": "Pluto",
        "right_answer": 4
    },

//#####################################################################################################

    {//Tierwelt

        "category": "Tierwelt",
        "question": "Was ist das größte Tier der welt?",
        "answer_1": "Blauwal",
        "answer_2": "Potwal",
        "answer_3": "Weißer Hai",
        "answer_4": "Orkar",
        "right_answer": 1
    },
    {
        "category": "Tierwelt",
        "question": "Wie schwer kann ein Blauwal werden?",
        "answer_1": "Bis zu 1.000 Kilogramm",
        "answer_2": "Bis zu 20.000 Kilogramm",
        "answer_3": "Bis zu 95.000 Kilogramm",
        "answer_4": "Bis zu 200.000 Kilogramm",
        "right_answer": 4
    },
    {
        "category": "Tierwelt",
        "question": "Welches Tier nennen wir auch = den besten Freund des Menschen?",
        "answer_1": "Löwe",
        "answer_2": "Spatz",
        "answer_3": "Hund",
        "answer_4": "Delfin",
        "right_answer": 3
    },
    {
        "category": "Tierwelt",
        "question": "Zu welcher Familie gehört der Fuchs?",
        "answer_1": "Zur Familie der Katzen",
        "answer_2": "Zur Familie der Hunde",
        "answer_3": "Zur Familie der Bären",
        "answer_4": "Zur Familie der Mäuse",
        "right_answer": 2
    },
    {
        "category": "Tierwelt",
        "question": "Wie groß werden Giraffen?",
        "answer_1": "Männliche: 4-5 Meter / Weibliche: 5-6 Meter",
        "answer_2": "Männliche: 5-6 Meter / Weibliche: 4-5 Meter",
        "answer_3": "Männliche: 6-7 Meter / Weibliche: 3-4 Meter",
        "answer_4": "Männliche: 4-5 Meter / Weibliche: 5-6 Meter",
        "right_answer": 2
    },
    {
        "category": "Tierwelt",
        "question": "Wie viele Bienenarten gibt es (bekannte)?",
        "answer_1": "7",
        "answer_2": "5",
        "answer_3": "2",
        "answer_4": "9",
        "right_answer": 4 
    },
    {
        "category": "Tierwelt",
        "question": "Was machen Murmeltiere bei Gefahr?",
        "answer_1": "Sie fallen in Schockstarre",
        "answer_2": "Sie hüpfen",
        "answer_3": "Sie Pfeifen",
        "answer_4": "Die drehen sich im Kreis",
        "right_answer": 3
    },
    {
        "category": "Tierwelt",
        "question": "Wie lange schläft ein Löwe pro Tag?",
        "answer_1": "2 Stunde",
        "answer_2": "8 Stunde",
        "answer_3": "15 Stunde",
        "answer_4": "20 Stunde",
        "right_answer": 4
    },

//#####################################################################################################

    {//Technik

        "category": "Technik",
        "question": "Welche Reihenfolge ist richtig",
        "answer_1": "byte - Kilobyte - Megabyte - Gigabyte - Terabyte - Petabyte",
        "answer_2": "byte - Megabyte - Kilobyte - Gigabyte - Terabyte - Petabyte",
        "answer_3": "Gigabyte - byte - Megabyte - Kilobyte - Terabyte - Petabyte",
        "answer_4": "byte - Kilobyte - Gigabyte - Megabyte - Terabyte - Petabyte",
        "right_answer": 1
    },
    {
        "category": "Technik",
        "question": "Was ist keine Leistungssteigernde komponente",
        "answer_1": "GPU",
        "answer_2": "CPU",
        "answer_3": "RAM",
        "answer_4": "Mainboard",
        "right_answer": 4
    },
    {
        "category": "Technik",
        "question": "Was heißt CPU",
        "answer_1": "Core Programmable User",
        "answer_2": "Calculating Professor Unit",
        "answer_3": "Central Processing Unit",
        "answer_4": "County Pushchair Unveiling",
        "right_answer": 3
    },
    {
        "category": "Technik",
        "question": "Mit welcher Grafikkarten-Generation führte Nvidia Raytracing ein?",
        "answer_1": "GTX 900",
        "answer_2": "RTX 3000",
        "answer_3": "GTX 1000",
        "answer_4": "RTX 2000",
        "right_answer": 4
    },
    {
        "category": "Technik",
        "question": "Wie groß ist 1 Gigabit (in Megabyte)?",
        "answer_1": "100 Megabyte",
        "answer_2": "200 Megabyte",
        "answer_3": "150 Megabyte",
        "answer_4": "125 Megabyte",
        "right_answer": 4
    },
    {
        "category": "Technik",
        "question": "Ein 2,7 GHz PC wird zum Kauf angeboten.Was bedeutet der Wert 2,7GHz?",
        "answer_1": "Die Taktfrequenz der CPU",
        "answer_2": "Die Speicherkapazität der Festplatte",
        "answer_3": "Die Zugriffszeit auf den RAM",
        "answer_4": "Die Bildwiederholungsfrequenz",
        "right_answer": 1
    },
    {
        "category": "Technik",
        "question": "Du beginnst einen Text am Computer zu schreiben. In welchem Speicher ist dieser vorläufig gespeichert?",
        "answer_1": "Festplatte",
        "answer_2": "RAM",
        "answer_3": "ROM",
        "answer_4": "Prozessor",
        "right_answer": 2
    },
    {
        "category": "Technik",
        "question": "Was verbirgt sich hinter der Abkürzung SATA?",
        "answer_1": "Eine Einheit zur Leistungsmessung",
        "answer_2": "Eine Datenschnittstelle",
        "answer_3": "Ein Siegel für 'Silent' -PCs",
        "answer_4": "Eine Router-Einstellung",
        "right_answer": 2
    }
];