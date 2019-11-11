
//soit anto2977 soit lilo2977
var cpt=0,nombreCarte1=0;

var couleurCarte1=0;
var nombreCarte=0;
var couleurCarte=0;
var total=0;
var partie=0;

function img_onclick(noImage)
{
    afficherCarte(noImage);
    cpt=cpt+1;

    if(cpt==2)
    {
        desactiverCarte(noImage);
        calculerPointage();

    }
    else
    {
    nombreCarte1=nombreCarte;
    couleurCarte1=couleurCarte;
    }
}
function btnContinuer_onclick()
{

        activeCarte();
        remetCarte();
        afficherPoint();

}
function afficherCarte(noImage)
{

    couleurCarte=Math.floor(Math.random()*4+1);
    nombreCarte=Math.floor(Math.random()*9);

    switch(couleurCarte)
    {
        case 1:   document.querySelector("#btnCarte"+ noImage).src="img/" + nombreCarte + "bleu.png";break;
        case 2:   document.querySelector("#btnCarte"+ noImage).src="img/" + nombreCarte + "jaune.png";break;
        case 3:   document.querySelector("#btnCarte"+ noImage).src="img/" + nombreCarte + "vert.png";break;
        case 4:   document.querySelector("#btnCarte"+ noImage).src="img/" + nombreCarte + "rouge.png";break;

    }

    document.querySelector( "#btnCarte"+noImage ).disabled = true;



}
function desactiverCarte(cpt)
{

        for(var i=1;i<=5;i++)
        {
            document.querySelector( "#btnCarte"+i ).disabled = true;
        }

        document.querySelector( "#btnContinuer" ).disabled = false;
        document.querySelector("#lblPtsTour").innerHTML = 0;


}
function remetCarte()
{
    for(var i=1;i<=5;i++)
    {
        document.querySelector("#btnCarte" +i).src="img/dosUno.PNG";
    }
}
function activeCarte()
{
    for(var i=1;i<=5;i++)
    {
        document.querySelector( "#btnCarte" +i).disabled = false;
    }
}
function calculerPointage()
{

    if(couleurCarte1==couleurCarte && nombreCarte1==nombreCarte)
    {

        partie=20;
    }
    else if(nombreCarte1==nombreCarte)
    {

        partie=10;
    }
    else if(couleurCarte1==couleurCarte)
    {

        partie=5
    }
    else
    {
        partie=0;
    }
    total+=partie;
    document.querySelector("#lblPtsTour").innerHTML = partie;
}
function afficherPoint()
{
    document.querySelector("#lblPtsTour").innerHTML = "0";
    document.querySelector("#lblPtsTot").innerHTML = total;
}