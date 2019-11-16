
var tabReponseUsager = new Array('A','A','A','A','A');
var point;

function noQts_onchange(noQTS)
{
    tabReponseUsager[noQTS-1]=document.queryselector("#lstQts"+noQts).value;
}
function btnCorriger_onclick()
{
    var tabBon = new Array("A","C","B","A","B");

    calculePointage();
    reponsePointage();

}
function calculePointage ()
{
    for(var i=0;i<=5;i++)
    {
        if(tabReponseUsager[i] === tabBon[i])
        {
            point+=20;
        }
    }

}
function reponsePointage()
{
    var sexMale= M;
    var sexFem= Mme;

    if(documment.querySelector(#radMasc).checked ==true && point > 79 )
    {
        document.querySelector("#lblReponse").innerHTML = console.log ("bravo"+sexMale+"#txtNom"+ "vous avez obtenue"+point);
    }
    else if(documment.querySelector(#radMasc).checked ==true )
    {
        document.querySelector("#lblReponse").innerHTML = console.log ("desoler"+sexFem+"#txtNom"+ "vous avez obtenue"+point);
    }
    else if(documment.querySelector(#radFem).checked ==true && point > 79 )
    {
        document.querySelector("#lblReponse").innerHTML = console.log ("bravo"+sexFem+"#txtNom"+ "vous avez obtenue"+point);
    }
    else
    {
        document.querySelector("#lblReponse").innerHTML = console.log ("desoler"+sexFem+"#txtNom"+ "vous avez obtenue"+point);
    }

}
