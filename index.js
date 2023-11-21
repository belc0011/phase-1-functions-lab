function distanceFromHqInBlocks(pickup) {
return Math.abs(42 - pickup);
}

function distanceFromHqInFeet(blocks) {
const feet = distanceFromHqInBlocks(blocks) * 264
    return  feet;
}

function distanceTravelledInFeet(start, end) {
   const totDist = Math.abs(end - start) * 264;
   return totDist;
}

function calculatesFarePrice(start, end) {
const totDist = distanceTravelledInFeet(start, end);
let fare;
if (totDist <= 400) {
    fare = 0;
    return fare;
}
else if (totDist <=2000) {
    fare = (totDist - 400) * 0.02;
    return fare;
}
else if (totDist <= 2500) {
    fare = 25;
    return fare;
}
else return "cannot travel that far"
}
