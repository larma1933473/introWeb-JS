function btnCalculer_onclick()
{
    if(ValiderFormat() ==true )
    {
        traitsCalcul();

    }

}
function  traitsCalcul()
{
    var nombre1=0;
    var nombre2=0;
    var signe=0;
    var resultat=0;

    nombre1=document.querySelector("#txtNbre1").value;
    nombre2=document.querySelector("#txtNbre2").value;
    signe=document.querySelector("#txtOperateur").value;

    resultat=calculer(nombre1,nombre2,signe);

    document.querySelector("#lblReponse").innerHTML = "  "+resultat;
}
function calculer(nombre1,nombre2,signe)
{
    var reponse=0;

    switch(signe)
    {
        case "+":reponse=parseInt(nombre1)+parseInt(nombre2);break;
        case "-":reponse=parseInt(nombre1)-parseInt(nombre2);break;
        case "/":reponse=parseInt(nombre1)/parseInt(nombre2);break;
        case "*":reponse=parseInt(nombre1)*parseInt(nombre2);break;
    }

    return reponse;
}
function ValiderFormat()
{
    var valide=true;

    if(valideNo(document.querySelector("#txtNbre1").value)==false)
    {
        valide=false;
        document.querySelector("#txtNbre1").style.backgroundColor = "red";
    }
    else
        document.querySelector("#txtNbre1").style.backgroundColor = "white";

    if(valideNo(document.querySelector("#txtNbre2").value)==false)
    {
        valide=false;
        document.querySelector("#txtNbre2").style.backgroundColor = "red";
    }
    else
        document.querySelector("#txtNbre2").style.backgroundColor = "white";

    if(valideSymbole(document.querySelector("#txtOperateur").value)==false)
    {
        valide=false;
        document.querySelector("#txtOperateur").style.backgroundColor = "red";
    }
    else
        document.querySelector("#txtOperateur").style.backgroundColor = "white";


    return valide;

}
function valideNo(chaine)
{
    return /^[0-9]+$/.test(chaine);
}
function valideSymbole(chaine)
{
    return /^[*/+-]$/.test(chaine);
}



