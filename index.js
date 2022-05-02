// //document.getElementById("count-el").innerText = 5

// // let firstBatch = 5
// // let secondBatch = 7

// // let count = firstBatch + secondBatch

// // console.log(count)

// // initialize the count to 0
// // when there is a click, number will be increased to 1
// // change the count-el in html to reflect the new count

// let countEl = document.getElementById("count-el")
// let count = 0


// function increment (){
//     count = count + 1
//     countEl.innerText = count
// }

let unitAmount = document.getElementById("amount")
let count = 0

let unitMeter1 = document.getElementById("length-meter")
let unitFeet1 = document.getElementById("length-feet")
let unitFeet2 = document.getElementById("length-feet2")
let unitMeter2 = document.getElementById("length-meter2")
let feet1 = 0
let meter2 = 0

let unitLiter1 = document.getElementById("volume-liter")
let unitLiter2 = document.getElementById("volume-liter2")
let unitGalon1 = document.getElementById("volume-gallon")
let unitGalon2 = document.getElementById("volume-gallon2")
let gallon1 = 0
let liter2 = 0

let unitKilo1 = document.getElementById("mass-kilo")
let unitKilo2 = document.getElementById("mass-kilo2")
let unitPound1 = document.getElementById("mass-pound")
let unitPound2 = document.getElementById("mass-pound2")
let pound1 = 0
let kilo2 = 0


function resetvalue(){
    let backToEmpty = document.getElementById("input-space").value=""
}


function calculation(){
    let inputAmount = document.getElementById("input-space").value
    count = inputAmount
    unitAmount.innerText = count
    
    unitMeter1.innerText = count
    feet1= count*3.2808
    unitFeet1.innerText = feet1.toFixed(3)

    unitFeet2.innerText = count
    meter2 = count*0.3048
    unitMeter2.textContent = meter2.toFixed(3)

    unitLiter1.textContent = count
    gallon1 = count*0.264
    unitGalon1.textContent = gallon1.toFixed(3)

    unitGalon2.textContent = count
    liter2 = count*3.78541
    unitLiter2.textContent = liter2.toFixed(3)

    unitKilo1.textContent = count
    pound1 = count * 2.20462
    unitPound1.textContent = pound1.toFixed(3)

    unitPound2.textContent = count
    kilo2 = count * 0.45359
    unitKilo2.textContent = kilo2.toFixed(3)
}