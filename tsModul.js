let k=f;
var alsoHatar = 10;
function Rng(alsoHatar, felsoHatar) {
    var also;
    var felso;
    if (alsoHatar < felsoHatar) {
        also = alsoHatar;
        felso = felsoHatar;
    }
    else {
        also = felsoHatar;
        felso = alsoHatar;
    }
    var randomSzam;
    randomSzam = Math.round(Math.random() * (felso - also) + also);
    return randomSzam;
}
function TombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        var generaltszam = Rng(alsoHatar, felsoHatar);
        generaltTomb.push(generaltszam);
    }
    return generaltTomb;
}
function Duplazo(VizsgaltTomb) {
    var duplazott = [];
    for (var i = 0; i <= VizsgaltTomb.length; i++) {
        duplazott.push(VizsgaltTomb[i] * 2);
    }
    return duplazott;
}
