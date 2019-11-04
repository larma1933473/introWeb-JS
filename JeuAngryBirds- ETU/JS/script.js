var label1=0;
var label2=0;
var imgBirdJoueur=0;
var imgBirdOrdi=0;

function traiteChoixOrd(imgBirdJoueurValeur) {
    imgBirdJoueur = imgBirdJoueurValeur;
    document.querySelector("#imgBirdJoueur").src = "img/angry-bird" + imgBirdJoueur + ".png";
    imgBirdOrdi = Math.floor(Math.random() * 3 + 1);

    document.querySelector("#imgBirdOrdi").src = "img/angry-bird" + imgBirdOrdi + ".png";
    calculerPoint();
    afficherPoint();
}
    function calculerPoint()
    {

        if(imgBirdJoueur==imgBirdOrdi)
        {
            label1=label1+10;
        }
        else
        {
            label2=label2+10;
        }

    }
    function afficherPoint()
    {
        document.querySelector("#lblResultatJoueur").innerHTML = label1;
        document.querySelector("#lblResultatOrdi").innerHTML = label2;
    }
