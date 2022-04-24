let fond = document.getElementById("fond");
let toutesVilles = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
let toutesBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");
let tousNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let toutesPastilles = document.getElementById("a50e0396-ce09-404f-a6a7-38ae7d1c4570");
let toutesLegendes = document.getElementById("a727460c-61b4-431d-9513-74f86d1c72e5");

let asideGeneral = document.getElementById("optionGeneral");
let asideCommunes = document.getElementById("optionCommunes");
let asideBulles = document.getElementById("optionBulles");
let asidePastilles = document.getElementById("optionPastilles");

let couleurFrontieres = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
let couleurNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let fondBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");

let contoursBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");

let boutonGeneral = document.getElementById("boutonMenuGeneral");
let boutonCommunes = document.getElementById("boutonMenuCommunes");
let boutonCouleursBulles = document.getElementById("boutonMenuBulles");
let boutonCouleursPastilles = document.getElementById("boutonMenuPastilles");

let boutonBulles = document.getElementById("boutonBulles");
let boutonPastilles = document.getElementById("boutonAffichagePastilles");
let boutonLegendes = document.getElementById("boutonLegendes");

let displayCanvas = document.getElementsByTagName("canvas");

boutonGeneral.addEventListener("click", () => {
  if(getComputedStyle(asideGeneral).display != "none")
    asideGeneral.style.display = "none";
  else
    asideGeneral.style.display = "flex";
})

boutonCommunes.addEventListener("click", () => {
  if(getComputedStyle(asideCommunes).display != "none")
    asideCommunes.style.display = "none";
   else 
    asideCommunes.style.display = "flex";
})

boutonCouleursBulles.addEventListener("click", () => {
  if(getComputedStyle(asideBulles).display != "none")
    asideBulles.style.display = "none";
   else 
    asideBulles.style.display = "flex";
})

boutonMenuPastilles.addEventListener("click", () => {
  if(getComputedStyle(asidePastilles).display != "none")
    asidePastilles.style.display = "none";
  else
    asidePastilles.style.display = "flex";
})

boutonBulles.addEventListener("click", () => {
  if(getComputedStyle(tousNoms, toutesBulles, toutesPastilles).display != "none"){
    tousNoms.style.display = "none";
    toutesBulles.style.display = "none";
  } else {
    tousNoms.style.display = "block";
    toutesBulles.style.display = "block";
  }
})


boutonAffichagePastilles.addEventListener("click", () => {
  if(getComputedStyle(toutesPastilles).display != "block"){
    toutesPastilles.style.display = "block"
  } else {
    toutesPastilles.style.display = "none"
  }
});

boutonAffichageLegendes.addEventListener("click", () => {
  if(getComputedStyle(toutesLegendes).display != "block"){
    toutesLegendes.style.display = "block";
  } else {
    toutesLegendes.style.display = "none";
  }
});

function toggleaside(id) {
  document.querySelectorAll(".option").forEach(function(aside) {
    if (aside.id == id) {
      aside.style.display = aside.style.display == "flex" ? "flex" : "none";
    } else {
      aside.style.display = "none";
    }})}

function toggleBulles(id) {
  if (document.querySelector('#boutonBulles').innerHTML != "Afficher les noms")
  document.querySelector('#boutonBulles').innerHTML = "Afficher les noms";  
 else 
    document.querySelector('#boutonBulles').innerHTML = "Masquer les noms";
};
function togglePastilles(id) {
  if (document.querySelector('#boutonAffichagePastilles').innerHTML != "Masquer les pastilles")
  document.querySelector('#boutonAffichagePastilles').innerHTML = "Masquer les pastilles";  
 else 
    document.querySelector('#boutonAffichagePastilles').innerHTML = "Afficher les pastilles";
  };
function toggleLegendes(id) {
    if (document.querySelector('#boutonAffichageLegendes').innerHTML != "Masquer les légendes")
  document.querySelector('#boutonAffichageLegendes').innerHTML = "Masquer les légendes";  
 else 
    document.querySelector('#boutonAffichageLegendes').innerHTML = "Afficher les légendes"
  };

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