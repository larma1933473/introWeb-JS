var auto1,garage1,moteur1;

function garage(nom,argent)
{
    this.nom=nom;
    this.argent=argent;

}
function voiture(marqueAuto,modele,annee)
{
    this.marqueAuto=marqueAuto;
    this.modele=modele;
    this.annee=annee;
}
function moteur(marqueMoteur,puissance)
{
    this.marqueMoteur=marqueMoteur;
    this.puissance=puissance;

}
function ExerciceGarage_onclick()
{

    auto1=new voiture (" honda "," civic "," 2012 ");
    garage1=new garage(" LSCustom "," 40 000$ ");
    moteur1=new moteur(" xrs "," 40 000chevraux ");


    AfficherAuto();
}
function  AfficherAuto()
{
    document.querySelector("#lblRes1").innerHTML = garage1.nom+garage1.argent+auto1.marqueAuto+auto1.modele+auto1.annee+moteur1.marqueMoteur+moteur1.puissance;
}


