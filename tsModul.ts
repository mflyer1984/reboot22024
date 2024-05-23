

let h=2;

function Rng(felsoHatar:number, alsoHatar:number):number{
   let also:number;
   let felso:number;
    if( alsoHatar<felsoHatar)
    {  also=alsoHatar;
       felso=felsoHatar;     }
       
       else{
        also=felsoHatar;
        felso=alsoHatar; 
       }
       var randomSzam:number;
       randomSzam=Math.round(Math.random()*(felso-also)+also);

    return randomSzam;
}
function TombGenerator(meret:number, alsoHatar:number, felsoHatar:number): Array<number>{
   let generaltTomb: Array<number>=[];
   for(let i=0;i<meret;i++)
   {
      let generaltszam:number=Rng(alsoHatar, felsoHatar)
       generaltTomb.push(generaltszam);
   }
   return generaltTomb}

   function Duplazo(VizsgaltTomb:Array<number>):Array<number>{
      let duplazott:Array<number>=[];
for(let i=0; i<=VizsgaltTomb.length; i++)
{
duplazott.push(VizsgaltTomb[i] *2);
}
return duplazott;

   }


