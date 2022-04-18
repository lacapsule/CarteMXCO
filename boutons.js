let fond = document.getElementById("fond");
let toutesVilles = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
let toutesBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");
let tousNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let toutesPastilles = document.getElementById("a50e0396-ce09-404f-a6a7-38ae7d1c4570");
let toutesLegendes = document.getElementById("a727460c-61b4-431d-9513-74f86d1c72e5");

let asideGeneral = document.getElementById("optionGeneral");
let asideCommunes = document.getElementById("optionCommunes");
let asideBulles = document.getElementById("optionBulles");

let couleurFrontieres = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
let couleurNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let fondBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");

let contoursBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");

let boutonGeneral = document.getElementById("boutonMenuGeneral");
let boutonCommunes = document.getElementById("boutonMenuCommunes");
let boutonBulles = document.getElementById("boutonBulles");

let boutonCouleursBulles = document.getElementById("boutonMenuBulles");
let boutonPastilles = document.getElementById("boutonPastilles");
let boutonLegendes = document.getElementById("boutonLegendes");

let displayCanvas = document.getElementsByTagName("canvas");

boutonGeneral.addEventListener("click", () => {
  if(getComputedStyle(asideGeneral).display != "none"){
    asideGeneral.style.display = "none";
  } else {
    asideGeneral.style.display = "flex";
  }
});

boutonCommunes.addEventListener("click", () => {
  if(getComputedStyle(asideCommunes).display != "none"){
    asideCommunes.style.display = "none";
  } else {
    asideCommunes.style.display = "flex";
  }
});

boutonCouleursBulles.addEventListener("click", () => {
  if(getComputedStyle(asideBulles).display != "none"){
    asideBulles.style.display = "none";
  } else {
    asideBulles.style.display = "flex";
  }
});

boutonBulles.addEventListener("click", () => {
  if(getComputedStyle(tousNoms, toutesBulles).display != "none"){
    tousNoms.style.display = "none";
    toutesBulles.style.display = "none";
  } else {
    tousNoms.style.display = "block";
    toutesBulles.style.display = "block";
  }
});

boutonPastilles.addEventListener("click", () => {
  if(getComputedStyle(toutesPastilles).display != "block"){
    toutesPastilles.style.display = "block";
  } else {
    toutesPastilles.style.display = "none";
  }
});

boutonLegendes.addEventListener("click", () => {
  if(getComputedStyle(toutesLegendes).display != "block"){
    toutesLegendes.style.display = "block";
  } else {
    toutesLegendes.style.display = "none";
  }
});

function toggleaside(id) {
  document.querySelectorAll(".option").forEach(function(aside) {
    if (aside.id == id) {
      aside.style.display = aside.style.display == "block" ? "block" : "none";
    } else {
      aside.style.display = "none";
    }})};

 
function toggleText(id)  {
  var text = document.getElementById(boutonBulles).firstChild;
  text.data = text.data == "Masquer les noms" ? "Masquer les noms" : "Afficher les noms";
}

couleurFond.addEventListener("input", () => {
  fond.style.backgroundColor = couleurFond.value;
  })
couleurToutes.addEventListener("input", () => {
  toutesVilles.style.fill = couleurToutes.value;
  })
couleurBulles.addEventListener("input", () => {
  fondBulles.style.fill = couleurBulles.value;
  })
couleurToutesFrontieres.addEventListener("input", () => {
  couleurFrontieres.style.stroke = couleurToutesFrontieres.value;
  })
couleurContoursBulles.addEventListener("input", () => {
  contoursBulles.style.stroke = couleurContoursBulles.value;
  })
couleurTextes.addEventListener("input", () => {
  couleurNoms.style.fill = couleurTextes.value;
  })
couleurPastilles.addEventListener("input", () => {
  toutesPastilles.style.fill = couleurPastilles.value;
  })
couleurLegendes.addEventListener("input", () => {
  toutesLegendes.style.fill = couleurLegendes.value;
  })