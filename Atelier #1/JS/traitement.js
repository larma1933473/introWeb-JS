var transformerLivreKg;{
transformerLivreKg=prompt("entrer votre poid en livre");

transformerLivreKg=transformerLivreKg/2.2;

console.log("votre poid en Kilogramme est de"+ transformerLivreKg + "Kg");
}

var traiterTaux;{
traiterTaux =prompt("entrer le montant d'argent canadien");

traiterTaux = traiterTaux/1.45 ;

console.log("vous avez "+ traiterTaux + "euros");
}

var calculerArgent;{
    var unSous;
    var cinqSous;
    var dixSous;
    var vingtcinqSous;

    unSous =prompt("entrer le nombre de billet de 1 sous");
    cinqSous =prompt("entrer le nombre de billet de 5 sous");
    dixSous =prompt("entrer le nombre de billet de 10 sous");
    vingtcinqSous =prompt("entrer le nombre de billet de 25 sous");

    calculerArgent= unSous+(cinqSous*5)+(dixSous*10)+(vingtcinqSous*25);

    console.log("vous avez "+ calculerArgent + "dollors canadien tire");

}

var entrerNip;{

   entrerNip = prompt("entrer votre NIP");

   if(entrerNip=1234)
   {
       console.log("transaction effectuée avec succeès");
   }
   else
   {
       console.log("transaction refusé");
   }

}

var calculerGallons;{

    var typeGallons;

    calculerGallons= prompt(" entrer combien de litres voulez vous transformer en gallons  ");

    typeGallons= prompt("appuyer sur 1 si vous voulez transformer des gallons américain ou appuyer sur 2 pour des gallons impériaux");

    if(typeGallons=1)
    {
        calculerGallons= calculerGallons*0.264172 ;
        console.log("vous avez "+calculerGallons + "gallons dans le nombre de litre demender");
    }

    if(typeGallons=2)
    {
        calculerGallons= calculerGallons*0.219969 ;
        console.log("vous avez "+calculerGallons + "gallons dans le nombre de litre demender");
    }
}
var calculerPrixGarderie;{

    var Animal;

   animal = prompt("appuyer sur 1 si vous voulez faire garder un chien ou appuyer sur 2 pour faire garder un chat");

   calculerPrixGarderie= prompt("entrer le nombre de jour que vous voulez faire garder votre animal")

    if(animal=1)
    {
        calculerPrixGarderie=18.5*calculerPrixGarderie;
        console.log("le prix du gardiennage est de "+calculerPrixGarderie + "$");
    }

    if(animal=2)
    {
        calculerPrixGarderie=16.95*calculerPrixGarderie;
        console.log("le prix du gardiennage est de "+calculerPrixGarderie + "$");
    }

}
 var calculerMontant;{
     var ageEnfant;
     var ageVieux;
     var etudiant;
     var nombreBillet;
     var aucun;
     var prixTotal;

     nombreBillet= prompt(" combien de billet excluant les billet d'enfant de 5 ans et moins ?  ");
     ageEnfant = prompt("combien de billet avez vous besoin pour les enfant agé de 5 ans et moins? ");
     agevVieux = prompt("combien de billet avez vous besoin pour les personne agé de 65 ans et plus? ");
     aucun = prompt("combien de billet avez vous besoin pour les personne appartennant a aucune de ces catégories?");
     etudiant = prompt(" combien de billet sont pour des étudiant?  ");

     if(ageVieux > 0)
     {
         ageVieux = ageVieux*15;
     }
     if(etudiant > 0)
     {
         etudiant = etudiant*12;
     }
     if(aucun > 0)
     {
         aucun=aucun*20;
     }
     prixTotal=aucun+etudiant+ageVieux;
     console.log("le prix total de vos billet est de "+prixTotal+"$");

     if(nombreBillet > 5)
     {
       prixTotal=(aucun+etudiant+ageVieux) *0.9;
       console.log("mais puisque vous avez acheter plus de 5 billet votre prix devient"+prixTotal+"$")
     }

}

