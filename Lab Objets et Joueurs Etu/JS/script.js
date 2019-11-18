var cpt=0;
var tabJoueur = new Array();

function NouveauxJoueur(nomJoueur,ageJoueur,pointJoueur)
{
    this.nomJoueur=nomJoueur;
    this.ageJoueur=ageJoueur;
    this.pointJoueur=pointJoueur;
}
function btnAjouter_onclick()
{
    ajouterJoueur();
    AfficherJoueur();
    cpt++;
    gererBoutons();
}

function ajouterJoueur()
{
    var nom=document.querySelector("#txtNom").value;
    var age=document.querySelector("#txtAge").value;
    var point=document.querySelector("#txtPoints").value;

    tabJoueur[cpt] = new NouveauxJoueur(nom,age,point);

}
function AfficherJoueur()
{
    document.querySelector("#Reponse").innerHTML = "";
    for(var i=0;i<tabJoueur.length;i++)
    {
        document.querySelector("#Reponse").innerHTML += "<br />" + tabJoueur[i].nomJoueur +" " + tabJoueur[i].ageJoueur+ " " +tabJoueur[i].pointJoueur  ;
    }
}
function gererBoutons()
{
if(cpt==5)
{
    document.querySelector("#btnTrouverMoy").disabled=false;
    document.querySelector("#btnTrouverMeilleur").disabled=false;

}
}

function btnTrouverMoy_onclick()
{
    var moy=0;

	for(var i=0;i<tabJoueur.length;i++)
    {
        moy+=parseInt(tabJoueur[i].pointJoueur);
    }
    moy=moy/tabJoueur.length;
    document.querySelector("#Reponse").innerHTML=moy;
}

function btnTrouverMeilleur_onclick()
{
    grandNombre=0;

	for(var i=0;i<tabJoueur.length;i++)
    {

    }
}
function btnRechercher_onclick()
{
    var quitter =false;
    var i = 0;
    var nomChercher=document.querySelector("#txtNom").value;
    while(quitter==false && i <tabJoueur.length)
    {
        if (tabJoueur[i].nomJoueur == nomChercher) {
            quitter = true;
            document.querySelector("#Reponse").innerHTML = " le nom existe ";
        }
        else {
            document.querySelector("#Reponse").innerHTML = " le nom existe pas ";
        }
        i++;
    }
}

