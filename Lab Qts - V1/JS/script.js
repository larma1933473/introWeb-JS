
var tabReponseUsager = new Array('A','A','A','A','A');
var point=0;

function noQts_onchange(noQTS)
{
    tabReponseUsager[noQTS]=document.querySelector("#lstQts"+(noQTS+1)).value;
}
function btnCorriger_onclick()
{


    calculePointage();
    reponsePointage();
    point=0;

}
function calculePointage ()
{
    var tabBon = new Array("A","C","B","A","B");

    for(var i=0;i<tabBon.length;i++)
    {
        if(tabReponseUsager[i] == tabBon[i])
        {
            point=point+20;
        }
    }

}
function reponsePointage()
{
    var nom= document.querySelector("#txtNom").value;

    if(document.querySelector("#radMasc").checked == true && point > 79 )
    {
        document.querySelector("#lblReponse").innerHTML =("brabo M. "+nom+ " vous avez obtenue "+ point+"/100");
    }
    else if(document.querySelector("#radMasc").checked ==true )
    {
        document.querySelector("#lblReponse").innerHTML = ("desoler M. "+nom+ " vous avez obtenue "+point+"/100");
    }
    else if(document.querySelector("#radFem").checked ==true && point > 79 )
    {
        document.querySelector("#lblReponse").innerHTML = ("bravo Mme. "+nom+ " vous avez obtenue "+point+"/100");
    }
    else
    {
        document.querySelector("#lblReponse").innerHTML = ("desoler Mme. "+nom+ " vous avez obtenue "+point+"/100");
    }

}
