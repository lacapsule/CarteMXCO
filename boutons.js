let toutesVilles = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
let couleurFrontieres = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
let fond = document.getElementById("fond");
let fondBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");
let contoursBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");
let toutesBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");
let tousNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let couleurNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let boutonBulles = document.getElementById("boutonBulles");
let boutonGeneral = document.getElementById("boutonMenuGeneral");
let asideGeneral = document.getElementById("optionGeneral");
let boutonCommunes = document.getElementById("boutonMenuCommunes");
let asideCommunes = document.getElementById("optionCommunes");
let boutonCouleursBulles = document.getElementById("boutonMenuBulles");
let asideBulles = document.getElementById("optionBulles");

boutonGeneral.addEventListener("click", () => {
  if(getComputedStyle(optionGeneral).display != "none"){
    asideGeneral.style.display = "none";
  } else {
    asideGeneral.style.display = "flex";
  }
});

boutonCommunes.addEventListener("click", () => {
  if(getComputedStyle(optionCommunes).display != "none"){
    asideCommunes.style.display = "none";
  } else {
    asideCommunes.style.display = "flex";
  }
});

boutonCouleursBulles.addEventListener("click", () => {
  if(getComputedStyle(optionBulles).display != "none"){
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

couleurFond.addEventListener("input", () => {
  fond.style.backgroundColor = couleurFond.value;
  } 
)
couleurToutes.addEventListener("input", () => {
  toutesVilles.style.fill = couleurToutes.value;
  } 
)
couleurBulles.addEventListener("input", () => {
  fondBulles.style.fill = couleurBulles.value;
  } 
)
couleurContoursBulles.addEventListener("input", () => {
  contoursBulles.style.stroke = couleurContoursBulles.value;
  } 
)
couleurTextes.addEventListener("input", () => {
  couleurNoms.style.fill = couleurTextes.value;
})

couleurToutesFrontieres.addEventListener("input", () => {
  couleurFrontieres.style.stroke = couleurToutesFrontieres.value;
  } 
)

  