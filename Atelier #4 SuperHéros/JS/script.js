function radHero_onclick(noImage)
{

    document.querySelector("#imgHero").src="images/super-hero"+ noImage +".jpg";

    document.querySelector( "#imgHero"+noImage ).disabled = true;

}
function desactiverBtn_onclick ()
{

    for(var i=1;i<=4;i++)
    {
        document.querySelector( "#imgHero"+i ).disabled = true;
    }
}
function activerBtn_onclick  ()
{
    for(var i=1;i<=4;i++)
    {
        document.querySelector( "#imgHero" +i).disabled = false;
    }

}
function memeImage_onclick  ()
{
    for(var i=1;i<=4;i++)
    {
        document.querySelector("#imgHero" +i).src="images/super-hero1.jpg";
    }
}
function desactiverClick_onclick  ()
{
    for(var i=1;i<=4;i++)
    {
        document.querySelector( "#imgHero" +i).disabled = true;
    }

}
