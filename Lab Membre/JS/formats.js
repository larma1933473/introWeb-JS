function valideFormat()
{
    var valide=true;

    if(ValideNom(document.querySelector("#txtNbre1").value)==false)
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
function ValideNom(Chaine)
{
    return /^([A-z]|[À-ë])+(\-)?([A-z]|[À-ë])+$/.test(Chaine);
}
function ValideTel(Chaine)
{
    return /^\(\d{3}\) \d{3}\-\d{3}/.test(Chaine);
}
function ValidePoste(Chaine)
{
    return /^[A-z]\d[A-z] [A-z]\d[A-z]$/.test(Chainee);
}
function ValideCodePerm(Chaine)
{
    return /^[A-z]{4}[0-9]{8}$/.test(Chaine);
}
