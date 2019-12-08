function valideFormat()
{
    var valide=true;

    if(ValideNom(document.querySelector("#txtNom").value)==false)
    {
        valide=false;
        document.getElementById("txtNom").style.borderColor = "red"
    }
    else
        document.getElementById("txtNom").style.borderColor = "white";

    if(ValideNom(document.querySelector("#txtPrenom").value)==false)
    {
        valide=false;
        document.getElementById("txtPrenom").style.borderColor = "red"
    }
    else
        document.getElementById("txtPrenom").style.borderColor = "white";

    if(ValideAdresse(document.querySelector("#txtAdresse").value)==false)
    {
        valide=false;
        document.getElementById("txtAdresse").style.borderColor = "red"
    }
    else
        document.getElementById("txtAdresse").style.borderColor = "white";

    if(ValideNom(document.querySelector("#txtVille").value)==false)
    {
        valide=false;
        document.getElementById("txtVille").style.borderColor = "red"
    }
    else
        document.getElementById("txtVille").style.borderColor = "white";

    if(ValideTel(document.querySelector("#txtTel").value)==false)
    {
        valide=false;
        document.getElementById("txtTel").style.borderColor = "red"
    }
    else
        document.getElementById("txtTel").style.borderColor = "white";

    if(ValidePoste(document.querySelector("#txtCodePostal").value)==false)
    {
        valide=false;
        document.getElementById("txtCodePostal").style.borderColor = "red"
    }
    else
        document.getElementById("txtCodePostal").style.borderColor = "white";

    if(ValideCodePerm(document.querySelector("#txtCodePerm").value)==false)
    {
        valide=false;
        document.getElementById("txtCodePerm").style.borderColor = "red"
    }
    else
        document.getElementById("txtCodePerm").style.borderColor = "white";


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
    return /^([A-z]\d[A-z] [A-z]\d[A-z])|(^$)$/.test(Chaine);
}
function ValideCodePerm(Chaine)
{
    return /^[A-z]{4}[0-9]{8}|(^$)$/.test(Chaine);
}
function ValideAdresse(Chaine)
{
    return /^[0-9]{4}([A-z]|[À-ë])+$/.test(Chaine);
}
