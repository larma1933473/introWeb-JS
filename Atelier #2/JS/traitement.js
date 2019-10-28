function calculeParcours(nombreKm)
{
    var Total;


    Total=nombreKm*60;

    return total;

}
function afficheMoutons(nombreMoutons)
{
    for(var i=0;i<nombreMoutons;i++)
    {
        console.log(i + "mouton")
    }
}

function additionneNbre(nombreChiffre)
{
    var total=0;

   for (var i = 0; i < nombreChiffre; i++)
   {
        total += i;

   }
    return total;
}
function trieOrdre(nombre1,nombre2,nombre3)
{     var croissant;

    if(nombre1<nombre2&&nombre2<nombre3)
    {

        croissant = nombre1 + "<" + nombre2 + "<" + nombre3;
     }
    else if(nombre1>nombre2&&nombre2<nombre3)
    {

        croissant = nombre2 + "<" + nombre1 + "<" + nombre3;

    }
    else if(nombre1<nombre2&&nombre2>nombre3)
    {
        croissant = nombre1 + "<" + nombre3 + "<" + nombre2;

    }
    else
    {
        croissant= nombre3 + "<" + nombre2 + "<" + nombre1;
    }
    return croissant;
}
function afficheEtoiles(nombreEtoile)
{
   switch(nombreEtoile)
   {
       case 1: nombreEtoile="\u2605 \u2606 \u2606 \u2606 \u2606";break;
       case 2: nombreEtoile="\u2605 \u2605 \u2606 \u2606 \u2606";break;
       case 3: nombreEtoile="\u2605 \u2605 \u2605 \u2606 \u2606";break;
       case 4: nombreEtoile="\u2605 \u2605 \u2605 \u2605 \u2606";break;
       case 5: nombreEtoile="\u2605 \u2605 \u2605 \u2605 \u2605 ";break;
   }
   return nombreEtoile;
}
function calculeDegat(degat)
{

        nombre2= Math.floor(Math.random()*6+1);
        nombre3= Math.floor(Math.random()*12+1);

        switch (degat)
        {
            case 1:degat= Math.floor(Math.random()*10+1)+1; break;
            case 2:degat= Math.floor(Math.random()*6+1)+2; break;
            case 3:degat=Math.floor(Math.random()*12+1); break;
        }
        return degat;
}
function calculeQts()
{
    var tabquestion = new Array("question#1? a/b/c,question#2? a/b/c,question#3? a/b/c,question#1? a/b/c,question#4? a/b/c,question#5? a/b/c");
    var tabBon = new Array("a","c","b","a","b");

     for(var i=0; i<tabquestion:i++)
    {
        tabquestion=prompt(i=1);

    }
}
