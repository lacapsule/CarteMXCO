let fond = document.getElementById("fond");
let toutesVilles = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
let toutesBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");
let tousNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let toutesPastilles = document.getElementById("a50e0396-ce09-404f-a6a7-38ae7d1c4570");

let asideGeneral = document.getElementById("optionGeneral");
let asideCommunes = document.getElementById("optionCommunes");
let asideBulles = document.getElementById("optionBulles");
let asidePastilles = document.getElementById("optionPastilles");

let couleurToutes = document.getElementById("couleurToutes");
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
let toutesLegendes = document.querySelector("#a727460c-61b4-431d-9513-74f86d1c72e5");

let legendes1 = document.querySelector("#premierRond");
let legendes2 = document.querySelector("#secondRond");
let legendes3 = document.querySelector("#troisiemeRond");
let legendes4 = document.querySelector("#quatriemeRond");

let displayCanvas = document.getElementsByTagName("canvas");

boutonAffichageLegendes1.addEventListener("click", () => {
  if(getComputedStyle(legendes1).display != "none"){
    legendes1.style.display = "none";
    texte1.style.display = "none";
  } else {
    legendes1.style.display = "block";
    texte1.style.display = "block";
  }
});
function toggleLegendes1(id) {
  if (document.querySelector('#boutonAffichageLegendes1').innerHTML != "Masquer les légendes")
document.querySelector('#boutonAffichageLegendes1').innerHTML = "Masquer les légendes";  
else 
  document.querySelector('#boutonAffichageLegendes1').innerHTML = "Afficher les légendes"
};
couleurLegendes1.addEventListener("input", () => {
  legendes1.style.fill = couleurLegendes1.value;
  })

  boutonAffichageLegendes2.addEventListener("click", () => {
    if(getComputedStyle(legendes2).display != "none"){
      legendes2.style.display = "none";
      texte2.style.display = "none";
    } else {
      legendes2.style.display = "block";
      texte2.style.display = "block";
    }
  });
  function toggleLegendes2(id) {
    if (document.querySelector('#boutonAffichageLegendes2').innerHTML != "Masquer les légendes")
  document.querySelector('#boutonAffichageLegendes2').innerHTML = "Masquer les légendes";  
  else 
    document.querySelector('#boutonAffichageLegendes2').innerHTML = "Afficher les légendes"
  };
  couleurLegendes2.addEventListener("input", () => {
    legendes2.style.fill = couleurLegendes2.value;
    })

    boutonAffichageLegendes3.addEventListener("click", () => {
      if(getComputedStyle(legendes3).display != "none"){
        legendes3.style.display = "none";
        texte3.style.display = "none";
      } else {
        legendes3.style.display = "block";
        texte3.style.display = "block";
      }
    });
    function toggleLegendes3(id) {
      if (document.querySelector('#boutonAffichageLegendes3').innerHTML != "Masquer les légendes")
    document.querySelector('#boutonAffichageLegendes3').innerHTML = "Masquer les légendes";  
    else 
      document.querySelector('#boutonAffichageLegendes3').innerHTML = "Afficher les légendes"
    };
    couleurLegendes3.addEventListener("input", () => {
      legendes3.style.fill = couleurLegendes3.value;
      })

      boutonAffichageLegendes4.addEventListener("click", () => {
        if(getComputedStyle(legendes4).display != "none"){
          legendes4.style.display = "none";
          texte4.style.display = "none";
        } else {
          legendes4.style.display = "block";
          texte4.style.display = "block";
        }
      });
      function toggleLegendes4(id) {
        if (document.querySelector('#boutonAffichageLegendes4').innerHTML != "Masquer les légendes")
      document.querySelector('#boutonAffichageLegendes4').innerHTML = "Masquer les légendes";  
      else 
        document.querySelector('#boutonAffichageLegendes4').innerHTML = "Afficher les légendes"
      };
      couleurLegendes4.addEventListener("input", () => {
        legendes4.style.fill = couleurLegendes4.value;
        })

boutonAffichageLegendes.addEventListener("click", () => {
  if(getComputedStyle(toutesLegendes).display != "block"){
    toutesLegendes.style.display = "block";
  } else {
    toutesLegendes.style.display = "none";
  }
});
function toggleLegendes(id) {
  if (document.querySelector('#boutonAffichageLegendes').innerHTML != "Masquer les légendes")
document.querySelector('#boutonAffichageLegendes').innerHTML = "Masquer les légendes";  
else 
  document.querySelector('#boutonAffichageLegendes').innerHTML = "Afficher les légendes"
};
couleurLegendes.addEventListener("input", () => {
  toutesLegendes.style.fill = couleurLegendes.value;
  })


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
    toutesPastilles.style.display = "none";
  } else {
    tousNoms.style.display = "block";
    toutesBulles.style.display = "block";
    toutesPastilles.style.display = "block";
  }
})


boutonAffichagePastilles.addEventListener("click", () => {
  if(getComputedStyle(toutesPastilles).display != "block"){
    toutesPastilles.style.display = "block"
  } else {
    toutesPastilles.style.display = "none"
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

  

couleurFond.addEventListener("input", () => {
  fond.style.backgroundColor = couleurFond.value;
  })
couleurToutesVilles.addEventListener("input", () => {
  toutesVilles.style.fill = couleurToutesVilles.value;
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
