var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

var claim6 = new claim("Dan Harmon","Specialist", 600000);
var claim7 = new claim("Morty Smith","Primary Care", 1400);
var claim8 = new claim("Rick Sanchez","Specialist", 840);
var claim9 = new claim("Revolio Clockberg Jr.","Emergency", 800000);
var claim10 = new claim("Abradolf Linclear","Specialist", 7200);

var initialList = [claim1, claim2, claim3, claim4, claim5, claim6, claim7, claim8, claim9, claim10]

function calcPercent(reason){
var type = reason.visitType;
switch(type) {
    case ("Optical"):
    return 0;
    break;
    case ("Specialist"):
    return .10;
    break;
    case ("Emergency") :
    return 1;
    break;
    case ("Primary Care") :
    return .5;
    break;
    default:
    return "Someone forgot to buy insurance";
   
};
}
var sumPaidOut = 0;
for(var i = 0; i < initialList.length; i++){
var amountCovered = calcPercent(initialList[i]) * (initialList[i].visitCost);
sumPaidOut += amountCovered;
appendToDom("Paid out $" + amountCovered + " for " + initialList[i].patientName + ".");
console.log("Paid out $" + amountCovered + " for " + initialList[i].patientName + ".");
console.log(Math.round(sumPaidOut));
};

function appendToDom(blah){
	var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');
//added [i] to access array inside the array
  newEl = document.createElement('li');
//added .join to make more readable
  newText = document.createTextNode(blah);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}
