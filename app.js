const stage = {
entreprise: "La Communauté d'Agglomération de La Riviera du Levant (CARL)",
secteur: "Collectivité territoriale",
lieu: "Guadeloupe - Gosier",
periode: "Juin 2026 (1 mois)",
poste: "Stagiaire en communication",
service: "Communication interne et externe"
};

const missions = [
{
titre: "Diffusion des communications internes",
type: "Communication interne",
description: "Participation à la diffusion quotidienne des communications destinées aux agents de la collectivité. Les informations étaient transmises principalement par Microsoft Teams et par courrier électronique.",
outils: ["Microsoft Teams", "Microsoft Outlook"],
competences: ["Exprimer"],
},

{
titre: "Mise à jour de l'intranet",
type: "Communication interne",
description: "Participation à la mise à jour de l'intranet de la collectivité. Cette mission consistait notamment à ajouter de nouvelles communications et à retirer les contenus devenus obsolètes.",
outils: ["Intranet"],
competences: ["Comprendre"],
},

{
titre: "Tests du site internet",
type: "Communication externe",
description: "Réalisation de tests sur le site internet afin de vérifier son bon fonctionnement avant sa mise en ligne. Cette mission permettait d'identifier d'éventuels problèmes d'affichage, de navigation ou de fonctionnement.",
outils: ["Navigateur web"],
competences: ["Comprendre", "Développer"],
},

{
titre: "Création de pictogrammes et de bannières",
type: "Communication externe",
description: "Réalisation de pictogrammes et de bannières destinés à accompagner et illustrer les contenus du site internet. Les éléments graphiques étaient adaptés au support numérique et aux besoins de communication de la collectivité.",
outils: ["Outils de création graphique"],
competences: ["Exprimer", "Concevoir"],
image: "assets/images/pictogrammes.jpg",
horizontal: true
},

{
  titre: "Rédaction de légendes Instagram",
  type: "Communication externe",
  description: "Rédaction de légendes destinées aux publications Instagram de la collectivité. Les textes étaient conçus pour présenter les informations de manière claire, concise et attractive.",
  outils: ["Meta"],
  competences: ["Exprimer", "Comprendre"],
  image: "assets/images/IMG_2456.jpg"
},

{
  titre: "Réalisation d'une affiche pour le bus France Services",
  type: "Communication externe",
  description: "Conception d'une affiche destinée à promouvoir les services proposés par le bus France Services. La réalisation devait permettre de présenter les informations de manière claire et visuelle afin d'être facilement comprise par le public.",
  outils: ["Outils de création graphique"],
  competences: ["Exprimer", "Concevoir"],
  image: "assets/images/IMG_2460.jpg"
},

{
  titre: "Rédaction d'un communiqué de presse",
  type: "Communication externe",
  description: "Participation à la rédaction d'un communiqué de presse destiné à transmettre une information de manière claire et structurée. Le contenu devait être adapté à une communication institutionnelle et permettre de comprendre rapidement les informations essentielles.",
  outils: ["Outils bureautiques"],
  competences: ["Exprimer"],
}

];
const bilan = {
appris: "J'ai découvert le fonctionnement d'un service de communication au sein d'une collectivité territoriale et développé mon expérience en communication interne et externe.",
approfondir: "Je souhaite approfondir mes compétences en création graphique, communication digitale et développement web."
};

// ==============================
// AFFICHAGE DU STAGE
// ==============================

document.getElementById("stage-entreprise").textContent = stage.entreprise;
document.getElementById("stage-secteur").textContent = stage.secteur;
document.getElementById("stage-lieu").textContent = stage.lieu;
document.getElementById("stage-periode").textContent = stage.periode;
document.getElementById("stage-poste").textContent = stage.poste;
document.getElementById("stage-service").textContent = stage.service;

// ==============================
// AFFICHAGE DES MISSIONS
// ==============================

const listeMissions = document.getElementById("liste-missions");

missions.forEach(function(mission) {

  const article = document.createElement("article");
  article.classList.add("mission-card");
  if (mission.image) {
    article.classList.add("has-image");
  }
  if (mission.horizontal) {
    article.classList.add("horizontal-image");
  }

  const imageHTML = mission.image
    ? `<div class="mission-image">
         <img src="${mission.image}" alt="${mission.titre}">
       </div>`
    : "";

  article.innerHTML = `
    ${imageHTML}
    <div class="mission-content">
      <span class="mission-type">${mission.type}</span>
      <h3>${mission.titre}</h3>
      <p>${mission.description}</p>

      <div class="mission-details">
        <div class="detail-box">
          <h4>Compétence${mission.competences.length > 1 ? "s" : ""} MMI</h4>
          <ul>
            ${mission.competences.map(function(competence) {
              return `<li>${competence}</li>`;
            }).join("")}
          </ul>
        </div>

        <div class="detail-box">
          <h4>Outils utilisés</h4>
          <ul>
            ${mission.outils.map(function(outil) {
              return `<li>${outil}</li>`;
            }).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  listeMissions.appendChild(article);

});

// ==============================
// AFFICHAGE DES OUTILS
// ==============================

const listeOutils = document.getElementById("liste-outils");

const outilsUniques = [];

missions.forEach(function(mission) {

mission.outils.forEach(function(outil) {


if (!outilsUniques.includes(outil)) {
  outilsUniques.push(outil);
}


});

});

outilsUniques.forEach(function(outil) {

const span = document.createElement("span");

span.classList.add("tool");

span.textContent = outil;

listeOutils.appendChild(span);

});

// ==============================
// AFFICHAGE DU BILAN
// ==============================

document.getElementById("bilan-appris").textContent = bilan.appris;

document.getElementById("bilan-approfondir").textContent = bilan.approfondir;

// ==============================
// CONSOLE
// ==============================

missions.forEach(function(mission) {
console.log(mission.titre + " - " + mission.type);
});

console.log(missions.length + " missions réalisées");

// ==============================
// ANIMATION AU DÉFILEMENT
// ==============================

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function(entries) {

entries.forEach(function(entry) {


if (entry.isIntersecting) {
  entry.target.classList.add("visible");
}


});

}, {
threshold: 0.15
});

elements.forEach(function(element) {
observer.observe(element);
});