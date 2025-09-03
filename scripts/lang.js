const translations = {
  en: {
    pageTitle: "Ognjen Marić - Software Engineer",
    name: "Ognjen Marić",
    title: "Software Engineer",
    contact: "Contact",
    languages: "Languages",
    lang1: "Serbian - Native",
    lang2: "English - B2",
    skills: "Skills",
    skill1: "Team-Oriented",
    skill2: "Adaptability",
    skill3: "Critical Thinking",
    skill4: "Attention to Detail",
    about: "About Me",
    aboutText: "I'm a 3rd-year Software and Informatics Engineering student at Singidunum University with a strong passion for software development. From a young age, I have been fascinated by automation, which led me to pursue a mechanical high school education where I became a robotics technician. This early interest in technology inspired me to transition into software engineering, where I am currently studying. I am eager to learn and always looking for opportunities to grow.",
    education: "Education",
    edu1Title: "Robotics Technician",
    edu1Date: "Sep 2018 - Jul 2022",
    edu1School: "Mechanical school, Novi Sad",
    edu2Title: "Software and Informatics Engineering",
    edu2Date: "Sep 2022 - Present",
    edu2School: "Singidunum University, Novi Sad",
    techSkills: "Technical Skills",
    skillLangs: "<strong>Languages:</strong> Java, Python, JavaScript",
    skillMobile: "<strong>Mobile Development:</strong> Android (Java)",
    skillWeb: "<strong>Web:</strong> HTML, CSS, Angular",
    skillFrameworks: "<strong>Frameworks:</strong> Flask, Spring Boot",
    skillDB: "<strong>Databases:</strong> SQL, SQLite, MySQL, NoSQL",
    skillTesting: "<strong>Testing:</strong> JUnit 5",
    skillTools: "<strong>Tools:</strong> Android Studio, VS Code, IntelliJ IDEA, Eclipse",
    projects: "Projects",
    proj1Title: "Event Sharing Android App",
    proj1Text: "Developed an Android app for event sharing using Java and Android Studio. Implemented features for event creation, browsing, and user interaction. Built the backend with Node.js to handle CRUD operations, storing data in JSON files.",
    proj2Title: "University Management App",
    proj2Text: "Developed a web app for managing a university using Spring Boot and MySQL. Implemented event creation, browsing, and user interaction with full CRUD backend support.",
    proj3Title: "Tour Map App",
    proj3Text: "Developed an Android app for tourism and location discovery using Java and Android Studio. Implemented features for user accounts, location tracking, adding custom points of interest, and interactive map navigation. Built the backend with Spring Boot to manage locations and user data."
  },
  sr: {
    pageTitle: "Ognjen Marić - Softverski inženjer",
    name: "Ognjen Marić",
    title: "Softverski inženjer",
    contact: "Kontakt",
    languages: "Jezici",
    lang1: "Srpski - maternji",
    lang2: "Engleski - B2",
    skills: "Veštine",
    skill1: "Timski rad",
    skill2: "Prilagodljivost",
    skill3: "Kritičko razmišljanje",
    skill4: "Pažnja na detalje",
    about: "O meni",
    aboutText: "Student sam treće godine softverskog i informatičkog inženjerstva na Univerzitetu Singidunum, sa velikom strašću za razvoj softvera. Od malih nogu sam bio fasciniran automatizacijom, što me je navelo da upišem srednju mašinsku školu gde sam postao tehničar robotike. Ovo rano interesovanje za tehnologiju inspirisalo me je da pređem u softversko inženjerstvo, gde trenutno studiram. Uvek sam željan učenja i tražim prilike za napredak.",
    education: "Obrazovanje",
    edu1Title: "Tehničar robotike",
    edu1Date: "sep 2018 - jul 2022",
    edu1School: "Mašinska škola, Novi Sad",
    edu2Title: "Softversko i informatičko inženjerstvo",
    edu2Date: "sep 2022 - sada",
    edu2School: "Univerzitet Singidunum, Novi Sad",
    techSkills: "Tehničke veštine",
    skillLangs: "<strong>Jezici:</strong> Java, Python, JavaScript",
    skillMobile: "<strong>Mobilni razvoj:</strong> Android (Java)",
    skillWeb: "<strong>Veb:</strong> HTML, CSS, Angular",
    skillFrameworks: "<strong>Frejmvorkovi:</strong> Flask, Spring Boot",
    skillDB: "<strong>Baze podataka:</strong> SQL, SQLite, MySQL, NoSQL",
    skillTesting: "<strong>Testiranje:</strong> JUnit 5",
    skillTools: "<strong>Alati:</strong> Android Studio, VS Code, IntelliJ IDEA, Eclipse",
    projects: "Projekti",
    proj1Title: "Android aplikacija za deljenje događaja",
    proj1Text: "Razvio sam Android aplikaciju za deljenje događaja koristeći Javu i Android Studio. Implementirao sam funkcionalnosti za kreiranje događaja, pregled i interakciju korisnika. Bekend je napravljen u Node.js-u za obradu CRUD operacija, a podaci su čuvani u JSON fajlovima.",
    proj2Title: "Aplikacija za upravljanje univerzitetom",
    proj2Text: "Razvio sam veb aplikaciju za upravljanje univerzitetom koristeći Spring Boot i MySQL. Implementirao sam kreiranje događaja, pregled i interakciju korisnika sa potpunom CRUD podrškom na bekendu.",
    proj3Title: "Turistička mapa",
    proj3Text: "Razvijena Android aplikacija za turizam i otkrivanje lokacija koristeći Java i Android Studio. Implementirane funkcionalnosti za korisničke naloge, praćenje lokacije, dodavanje prilagođenih tačaka interesa i interaktivnu navigaciju na mapi. Backend je izrađen koristeći Spring Boot za upravljanje lokacijama i korisničkim podacima."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;

  document.querySelectorAll(".language-switch button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector(`.language-switch button[onclick="setLanguage('${lang}')"]`)
    .classList.add("active");
}


// default language
setLanguage("en");
