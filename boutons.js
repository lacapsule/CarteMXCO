let toutesBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");
let tousNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let toutesVilles = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
let fond = document.getElementById("fond");
boutonBulles.addEventListener("click", () => {
  if(getComputedStyle(tousNoms, toutesBulles).display != "none"){
    tousNoms.style.display = "none"
    toutesBulles.style.display = "none"
  } else {
    tousNoms.style.display = "block"
    toutesBulles.style.display = "block"
  }
})
couleurToutes.addEventListener("input", () => {
  toutesVilles.style.fill = couleurToutes.value;
  } 
)
couleurFond.addEventListener("input", () => {
  fond.style.backgroundColor = couleurFond.value;
  } 
)
  

