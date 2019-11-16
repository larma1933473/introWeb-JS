
var tabReponseUsager = new Array('A','A','A','A','A');
var point=0;
var sexMale= M;
var sexFem= Mme;

function noQts_onchange(noQTS)
{
    tabReponseUsager[noQTS-1]=document.queryselector("#lstQts"+noQts).value;
    alet("ok")
}
function btnCorriger_onclick()
{


    calculePointage();
    reponsePointage();

}
function calculePointage ()
{
    var tabBon = new Array("A","C","B","A","B");

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

    if(documment.querySelector("#radMasc").checked == true && point > 79 )
    {
        document.querySelector("#lblReponse").innerHTML =("desoler"+sexMale+"#txtNom"+ "vous avez obtenue"+ point);
    }
    else if(documment.querySelector("#radMasc").checked ==true )
    {
        document.querySelector("#lblReponse").innerHTML = ("desoler"+sexMale+"#txtNom"+ "vous avez obtenue"+point);
    }
    else if(documment.querySelector("#radFem").checked ==true && point > 79 )
    {
        document.querySelector("#lblReponse").innerHTML = ("bravo"+sexFem+"#txtNom"+ "vous avez obtenue"+point);
    }
    else
    {
        document.querySelector("#lblReponse").innerHTML = ("desoler"+sexFem+"#txtNom"+ "vous avez obtenue"+point);
    }

}
