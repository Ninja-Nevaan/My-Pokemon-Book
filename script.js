var photo= ["Pokeball.png", "Blastoise.png", "Charizard.png", "Venusaur.png", "Empoleon.png", "Infernape.png", "Torterra.png", "Greninja.png", "Delphox.png", "Chesnaught.png", "Inteleon.png", "Cinderace.png", "Rillaboom.png"];
var text= [" ", "Blastoise", "Charizard", "Venusaur", "Empoleon", "Infernape", "Torterra", "Greninja", "Delphox", "Chesnaught", "Inteleon", "Cinderace", "Rillaboom"];
var i=1;
function next(){
  document.getElementById("Pokémon").src= photo[i];
  document.getElementById("text").innerHTML= text[i];
  i++;
 if(i==13){
   i=0;
 }
}