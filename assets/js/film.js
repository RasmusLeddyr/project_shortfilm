// Film data
const films = {
  ztriwer: {
    title: "Ztriwer",
    youtube: "https://www.youtube.com/embed/Jf-zA6AeAbw?si=xFZ1sSNocYLT9Zlg",
    tasks: [
      {
        title: "Virkemidler",
        questions: [
          "Hvordan bruges lyd og visuelle effekter?",
          "Hvilken stemning skaber det?",
          "Giv eksempler fra filmen.",
        ],
      },
      {
        title: "Intertekstualitet",
        questions: [
          "Laves der referencer til andre værker eller ting, som I kender til?",
          "Kig på maleriet “Marilyn Monroe” af Andy Warhol, og se om I kan finde reference til det i kortfilmen.",
          "Hvordan fortolker I maleriets betydning, og hvordan relatere det til filmen?",
        ],
      },
      {
        title: "Budskab",
        questions: [
          "Hvad er kortfilmens tema og budskab?",
          "Beskriv hvordan I fortolker filmen.",
        ],
      },
    ],
  },
  opal: {
    title: "Opal",
    youtube: "https://www.youtube.com/embed/-1pVLJl_snc?si=vO-KeTYIfhvLx19e",
    tasks: [
      {
        title: "Virkemidler",
        questions: [
          "Hvordan bruges lyd og visuelle effekter?",
          "Hvilken stemning skaber det?",
          "Hvordan påvirker animationens stil og farvevalg din oplevelse af filmen?",
          "Skriv eksempler fra filmen og forklar deres virkning.",
        ],
      },
      {
        title: "Karakteranalyse",
        questions: [
          "Hvem er de tre personer i huset på den anden gade? Hvordan opføre de sig?",
          "Hvem er Opal og Claire? Hvordan adskiller de sig fra hinanden?",
          "Hvem er forældrene fra starten af filmen, og hvilken rolle spiller de?",
          "Hvordan relaterer alle karaktererne til hinanden?",
          "Analyser kropssprog, stemmeføring og sange.",
          "Hvordan understøtter disse elementer karakterernes personlighed og relationer?",
          "Skriv en kort beskrivelse af hver karakter baseret på dine observationer.",
        ],
      },
      {
        title: "Tema og fortolkning",
        questions: [
          "Skriv et kort resumé af filmens handling.",
          "Hvad mener du, der reelt skete i filmen? Find gerne flere mulige fortolkninger.",
          "Hvad kunne være filmens tema?",
          "Diskuter jeres forskellige synspunkter i gruppen eller med en makker.",
          "Skriv jeres konklusion.",
        ],
      },
    ],
  },
  doubleking: {
    title: "Double King",
    youtube: "https://www.youtube.com/embed/w_MSFkZHNi4?si=Pw7M0BI9glXCRhBy",
    tasks: [
      {
        title: "Virkemidler",
        questions: [
          "Hvordan bruges farver, lyd og animation?",
          "Hvilken rolle spiller musikken og lydeffekterne?",
          "Skriv eksempler fra filmen og forklar deres effekt.",
        ],
      },
      {
        title: "Karakteranalyse",
        questions: [
          "Hvordan vil du beskrive Double King som person? Er han drevet af magt, grådighed, eller noget andet?",
          "Hvad er hans mål, og hvorfor vil han have så mange kroner?",
          "Hvordan påvirker hans handlinger både ham selv og verden omkring ham?",
          "Skriv en kort karakterbeskrivelse baseret på dine svar.",
        ],
      },
      {
        title: "Tema og fortolkning",
        questions: [
          "Hvad ændrer sig i filmen fra start til slut?",
          "Hvad fortæller filmen om besættelse, magt, eller konsekvenser?",
          "Kan filmen tolkes som en kommentar til virkelige samfundsforhold eller menneskelig adfærd?",
          "Diskuter i jeres grupper eller med en makker forskellige fortolkninger af filmens tema og budskab.",
          "Skriv jeres konklusion.",
        ],
      },
    ],
  },
};

// Fetch film name from html URL
const params = new URLSearchParams(window.location.search);
const filmKey = params.get("film");

// Find HTML-elementer
const filmTitle = document.getElementById("film-title");
const filmContainer = document.getElementById("film-container");

// If film exists
if (films[filmKey]) {
  const film = films[filmKey];

  // Set title
  filmTitle.textContent = film.title;

  // Create YouTube iframe
  const iframe = document.createElement("iframe");
  iframe.src = film.youtube;
  iframe.width = "560";
  iframe.height = "315";
  iframe.allowFullscreen = true;
  filmContainer.appendChild(iframe);

  // Create container for tasks
  const taskContainer = document.createElement("div");
  taskContainer.id = "task-container";
  filmContainer.appendChild(taskContainer);

  // Go through table and create HTML
  film.tasks.forEach((task) => {
    // Create section for task
    const taskSection = document.createElement("div");
    taskSection.classList.add("task-section");

    // Task title
    const taskTitle = document.createElement("h3");
    taskTitle.textContent = task.title;

    // List with questions
    const taskList = document.createElement("ul");
    task.questions.forEach((question) => {
      const li = document.createElement("li");
      li.textContent = question;
      taskList.appendChild(li);
    });

    // Append items to the correct parents
    taskSection.appendChild(taskTitle);
    taskSection.appendChild(taskList);
    taskContainer.appendChild(taskSection);
  });
} else {
  filmTitle.textContent = "Film ikke fundet";
  filmContainer.innerHTML = "<p>Den valgte film eksisterer ikke.</p>";
}
