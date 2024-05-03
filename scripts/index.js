"use strict"

//input

const pickupDateInput = document.getElementById("pickupDateInput");
const numberDaysInput = document.getElementById("numberDaysInput");
const tollTagOption = document.getElementById("tollTagOption");
const gpsOption = document.getElementById("gpsOption");
const roadsideAssistanceOption = document.getElementById("roadsideAssistanceOption");
const noUnder25 = document.getElementById("noUnder25");
const yesUnder25 = document.getElementById("yesUnder25");

//button
const estimateCostBtn = document.getElementById("estimateCostBtn");

//output

const carRentalTotalOutput = document.getElementById("carRentalTotalOutput");
const optionOutput = document.getElementById("optionsOutput");
const under25SurchargeOutput =document.getElementById("under25SurchargeOutput");
const totalCostOutput = document.getElementById("totalCostOutput");

window.onload = function(){
    estimateCostBtn.onclick = onEstimateCostBtnClick;
}

function onEstimateCostBtnClick(){
//get known values

let numOfDays = Number(numberDaysInput.value);

let isTollTag = tollTagOption.checked;
let isGpsOption = gpsOption.checked;
let isRoadsideAssistance = roadsideAssistanceOption.checked;

let isUnder25 = yesUnder25.checked;

console.log(numOfDays);
console.log(isTollTag);
console.log(isGpsOption);
console.log(isRoadsideAssistance);
console.log(isUnder25);



//calculate unknown values

let carRentalTotal = 29.99 * numOfDays;

let optionsAmount = 0;

if(isTollTag){
    optionsAmount += (3.95 *numOfDays)
}

if(isGpsOption){
    optionsAmount += (2.95 * numOfDays);
}

if(isRoadsideAssistance){
    optionsAmount += (2.95 * numOfDays);
}

let surchargeAmount = 0;

if(isUnder25){
    surchargeAmount= .30 * (carRentalTotal + optionsAmount);
}

else{
    surchargeAmount = 0;
}

let totalCostAmount = carRentalTotal + optionsAmount + surchargeAmount;




//display the results

carRentalTotalOutput.innerHTML = carRentalTotal;
optionOutput.innerHTML = optionsAmount;
under25SurchargeOutput.innerHTML = surchargeAmount;
totalCostOutput.innerHTML = totalCostAmount;
}
