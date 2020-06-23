// entrer votre TJM
let tauxJournalier = 500;

//entrer nombre de jour travaillé
let jourTravaille = 211;

let chiffreAffaire = tauxJournalier * jourTravaille;
const premiereTranche = 38120 * 0.15;
const deuxiemeTranche = (chiffreAffaire - 38120) * 0.28;
const impotSociete = premiereTranche + deuxiemeTranche; 
const cSG = (chiffreAffaire - impotSociete) * 0.172;
const revenuAvantImpot = chiffreAffaire - impotSociete - cSG;

if (revenuAvantImpot >= 0 && revenuAvantImpot < 9964) {
    tranche = 0;    
} else if (revenuAvantImpot >= 9964 && revenuAvantImpot < 27519){
    tranche = 0.14;
} else if (revenuAvantImpot >= 27519 && revenuAvantImpot < 73779){
    tranche = 0.3;
} else if (revenuAvantImpot >= 73779 && revenuAvantImpot < 156244){
    tranche = 0.41;
} else {
    tranche = 0.45;
}
    
const impotSurRevenu = revenuAvantImpot * tranche;
const revenuNetAnnuel = revenuAvantImpot - impotSurRevenu;
const revenuNetMensuel = revenuNetAnnuel / 12;
const taxTotal = chiffreAffaire - revenuNetAnnuel;

console.log(`Impot Societe : ${impotSociete.toFixed(2)}`);
console.log(`CSG : ${cSG.toFixed(2)}`);
console.log(`Revenu avant impot : ${revenuAvantImpot.toFixed(2)}`);
console.log(`pourcentage impot : ${tranche*100}%`)
console.log(`Impot sur revenu : ${impotSurRevenu.toFixed(2)}`);
console.log(`Taxe total : ${taxTotal.toFixed(2)}`);
console.log(`Revenu net annuel : ${revenuNetAnnuel.toFixed(2)}`);
console.log(`Revenu net mensuel : ${revenuNetMensuel.toFixed(2)}`);
