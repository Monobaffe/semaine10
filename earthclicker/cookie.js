
//appel/lien des éléments par creation/variable.

var score = document.getElementById("score");

var buttonEarth = document.getElementById("buttonEarth");

var curseur = document.getElementById("curseur");
var priceCurseur = document.getElementById("priceCurseur");
var nbCurseur = document.getElementById("nbCurseur");

var anonymous = document.getElementById("anonymous");
var priceAnonymous = document.getElementById("priceAnonymous");
var nbAnonymous = document.getElementById("nbAnonymous");

var genie = document.getElementById("genie");
var priceGenie = document.getElementById("priceGenie");
var nbGenie = document.getElementById("nbGenie");

var motherEarth = document.getElementById("motherEarth");
var priceMotherEarth = document.getElementById("priceMotherEarth");
var nbMotherEarth = document.getElementById("nbMotherEarth");

var mario = document.getElementById("mario");
var priceMario = document.getElementById("priceMario");
var nbMario = document.getElementById("nbMario");

var dieu = document.getElementById("dieu");
var priceDieu = document.getElementById("priceDieu");
var nbDieu = document.getElementById("nbDieu");


//création des variables

var scoreE = 0; // variable score


var earthclicking = 1; // var nb de départ pour le multiplicateur

var buyCurseur = 15;//prix curseur
var countCurseur = 0;//nombre de curseur

var buyAnonymous = 100;
var countAnonymous = 0;

var buyGenie = 500;
var countGenie = 0;

var buyMotherEarth = 2000;
var countMotherEarth = 0;

var BuyMario = 10000;
var countMario = 0;

var buyDieu = 1000000;
var countDieu = 0;

//créations des fonctions.

//fonction score.

function affichageScore() {

		score.innerHTML = "  " + scoreE;
}


//affichage count + prix ensemble

function affichagePrixMultiplicateur() {
	nbCurseur.innerHTML = countCurseur + " ";
	priceCurseur.innerHTML = buyCurseur;
	nbAnonymous.innerHTML = countAnonymous + " ";
	priceAnonymous.innerHTML = buyAnonymous; 
	nbGenie.innerHTML = countGenie + " ";
	priceGenie.innerHTML = buyGenie;
	nbMotherEarth.innerHTML = countMotherEarth + " ";
	priceMotherEarth.innerHTML = buyMotherEarth;
	nbMario.innerHTML = countMario + " ";
	priceMario.innerHTML = BuyMario;
	nbDieu.innerHTML = countDieu + " ";
	priceDieu.innerHTML = buyDieu;
}


//function planète cliquable.

function clic() {
    scoreE = scoreE + earthclicking;
    affichageScore();
}

//function achat et autoclicks + multiplicateur0.

function acheterAutoClicks() {
	if(scoreE >= buyCurseur) {
	earthclicking = earthclicking + 20;
	setInterval(clic,10000);
	scoreE = scoreE - buyCurseur;
	buyCurseur = buyCurseur + 15 * earthclicking;
	countCurseur++;
	affichageScore();
	affichagePrixMultiplicateur();
} else {
	alert("Vous n'avez pas les points requis .");
}
}


//function achat anonymous multiplicateur 1.

function acheterAnonymous() {
	if(scoreE >= buyAnonymous) {
	earthclicking = earthclicking + 10;
	scoreE = scoreE - buyAnonymous;
	buyAnonymous = buyAnonymous + 100 * earthclicking;
	countAnonymous++;
	affichageScore();
	affichagePrixMultiplicateur();
} else {
	alert("Vous n'avez pas les points requis .");
}
}

// function achat Génie multiplicateur 2.

function acheterGenie() {
	if(scoreE >= buyGenie) {
	earthclicking = earthclicking + 50;
	scoreE = scoreE - buyGenie;
	buyGenie = buyGenie + 500 * earthclicking;
	countGenie++;
	affichageScore();
	affichagePrixMultiplicateur();
} else {
	alert("Vous n'avez pas les points requis .");
}
}

//function achat Motherearth multiplicateur 3.
function acheterMotherEarth() {
	if(scoreE >= buyMotherEarth) {
	earthclicking = earthclicking + 200;
	scoreE = scoreE - buyMotherEarth;
	buyMotherEarth = buyMotherEarth + 2000 * earthclicking;
	countMotherEarth++;
	affichageScore();
	affichagePrixMultiplicateur();
} else {
	alert("Vous n'avez pas les points requis .");
}
}

//function achat mario multiplicateur4.
function acheterMario() {
	if(scoreE >= BuyMario) {
	earthclicking = earthclicking + 500;
	scoreE = scoreE - BuyMario;
	BuyMario = BuyMario + 10000 * earthclicking;
	countMario++;
	affichageScore();
	affichagePrixMultiplicateur();
} else {
	alert("Vous n'avez pas les points requis .");
}
}

//function achat dieu multiplicateur 5
function acheterDieu() {
	if(scoreE >= buyDieu) {
	earthclicking = earthclicking + 10000;
	scoreE = scoreE - buyDieu;
	buyDieu = buyDieu + 1000000 * earthclicking;
	countDieu++;
	affichageScore();
	affichagePrixMultiplicateur();
} else {
	alert("Vous n'avez pas les points requis .");
}
}

//appel des fonctions
affichageScore();   //affiche le score initialiser a 0 planètes.

affichagePrixMultiplicateur();  //affiche les multiplicateurs et prix avec evolution de ceci.

buttonEarth.onclick = clic; //appel la fonction clic.

curseur.onclick = acheterAutoClicks;

anonymous.onclick = acheterAnonymous;//appel achat anonymous.

genie.onclick = acheterGenie; //appel achat génie.

motherEarth.onclick = acheterMotherEarth;// appel achat Mother earth.

mario.onclick = acheterMario; //  It's me, Mario!

dieu.onclick = acheterDieu;// lol it's just god what did you expect.