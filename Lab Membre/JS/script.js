function frmMembre_onsubmit()
{
    var prixPersonne=0;
    var valideFormulaire=true;


 if(validerChampsObligatoire()==true)
 {
     prixPersonne= traitePrix();

     if(valideFormat()===true)
     {
         var confirmation=confirm('le prix total est de ' +prixPersonne+'$ voulez-vous continuez ? ');

          if(confirmation===false)
          {
                valideFormulaire=false;
          }
     }
     else
     {
         valideFormulaire=false;
     }

 }
 else
 {
     document.querySelector("#lblMessageErreur").innerHTML="tout les champ ayant des étoiles sont obligatoire ";
     valideFormulaire=false;
 }
 return valideFormulaire;
}
function validerChampsObligatoire()
{
var valide=true;
var tabValideOblig=document.querySelectorAll(".Obligatoire");

for(var i=0;i<tabValideOblig.length;i++)
{
    if(tabValideOblig[i].value=="")
    {
        valide=false;
    }
}
   return valide;
}

function traitePrix()
{
    var prixTypePersonne =document.querySelector("#type").value;
    var prix=90;

    switch(prixTypePersonne)
    {
        case "adulte":prix=90;break;
        case "étudiant":prix=60;break;
        case "retraité":prix=80;break;
    }
    return prix;
}
