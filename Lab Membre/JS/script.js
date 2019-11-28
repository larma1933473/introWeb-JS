function frmMembre_onclick()
{
 

}
function validerChampsObligatoire()
{
var valide=true;
var tabValideOblig=document.querySelectorAll(".Obligatoire").value;

for(var i=0;i<tabValideOblig.Length;i++)
{
    if(tabValideOblig[i]=="")
    {
        valide=false;
    }
}
   return valide;
}

function traitePrix()
{
	
}
