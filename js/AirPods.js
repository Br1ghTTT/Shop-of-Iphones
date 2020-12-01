const air1 = {
    type: "liners",
    conecting: "wireless",
    interface: "Lightning",
    frequency: "20 - 15 000 Гц",
    Interconnected: "Not interconnected",
    price: 120,
}

const air2 = {
    type: "liners",
    conecting: "wireless",
    interface: "Lightning",
    frequency: "20 - 20 000 Гц",
    Interconnected: "Interconnected",
    case: "Special charging case",
    price: 139,
}

const air2With = {
    type: "liners",
    conecting: "wireless",
    interface: "Lightning",
    frequency: "20 - 20 000 Гц",
    Interconnected: "Interconnected",
    case: "Special charging case",
    price: 163,
}

const air3 = {
    type: "liners",
    conecting: "wireless",
    interface: "Lightning",
    frequency: "20 - 20 000 Гц",
    Interconnected: "Interconnected",
    case: "Special charging case",
    price: 220,
}




const priceSort = [air1.price, air2.price, air3.price, air2With.price];

function arrSort(){
    priceSort.sort((a,b) => a - b);
/*     document.getElementById("a1").innerHTML = priceSort; */
    console.log(priceSort);
}



function PriceA1() {
    document.getElementById("PrA1").value = air1.price;
}
function PriceA_1() {
    document.getElementById("PrA_1").value = air1.price;
}
function PriceA2() {
    document.getElementById("PrA2").value = air2With.price;
}
function PriceA2W() {
    document.getElementById("PrA2W").value = air2.price;
}
function PriceA3() {
    document.getElementById("PrA3").value = air3.price;
}




function sum(){
    let Fullsummary = document.getElementById("sum");
    Fullsummary.value = air1.price + air2.price + air2With.price + air3.price;
    return Fullsummary.value;
}
btnnn.addEventListener("click", sum);