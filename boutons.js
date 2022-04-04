
let bulles = document.getElementById("boutonBulles");
let noms = document.getElementById("boutonNoms");
let fonds = document.getElementById("boutonFonds");
let toutesBulles = document.getElementById("b13c0333-102d-4ea1-b7d6-4ce164979cfc");
let tousNoms = document.getElementById("bac92131-e0ac-4952-b465-08aa343a6732");
let toutesVilles = document.getElementById("b8e18138-5697-4033-9611-05eec396f769");
bulles.addEventListener("click", () => {
  if(getComputedStyle(toutesBulles).display != "none"){
    toutesBulles.style.display = "none";
  } else {
    toutesBulles.style.display = "block";
  }
})
function invisible(){
  if(getComputedStyle(tousNoms).display != "none"){
    tousNoms.style.display = "none";
  } else {
    tousNoms.style.display = "block";
  }
};
noms.onclick = invisible;

function visible(){
  if(getComputedStyle(tousNoms).display != "block"){
    tousNoms.style.display = "block";
  } else {
    tousNoms.style.display = "none";
  }
};
noms.onclick = visible;


couleurToutes.addEventListener("input", () => {
  toutesVilles.style.fill = couleurToutes.value;
  } 
)
  

