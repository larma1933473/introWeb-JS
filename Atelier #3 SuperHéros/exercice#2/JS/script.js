function afficherHeros_onclick()
{
        var heros;

        heros=document.querySelector("#txtNoImage").value;

        document.querySelector("img").src="images/super-hero"+ heros +".jpg";
}