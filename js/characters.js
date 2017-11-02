function character(name, info, weapon){
	this.name = name;
	this.info = info;
	this.weapon = weapon;
}

var sora = new character(
	"Sora", 
	"Sora is the main protagonist", 
	"Keyblade"
);

var riku = new character(
	"Riku",
	"Riku is a complex guy",
	"Way To The Dawn"
);

var kairi = new character(
	"Kairi",
	"Kairi is one of the 7 princesses of light, and recently began wielding a keyblade",
	"Destiny's Embrace"
);

function displayChar(charChoice){
	if(charChoice == "Sora")
	{
		document.getElementById("charName").innerHTML = sora.name;
		portrait("img/Sora.png", 300, 600);
		document.getElementById("charInfo").innerHTML = sora.info;
		document.getElementById("weaponName").innerHTML = sora.weapon;
		weapon("img/KingdomKey.png", 300, 600);
	}
	else if(charChoice == "Riku")
	{
		document.getElementById("charName").innerHTML = riku.name;
		portrait("img/Riku.png", 300, 600);
		document.getElementById("charInfo").innerHTML = riku.info;
		document.getElementById("weaponName").innerHTML = riku.weapon;
		weapon("img/Waytodawn.png", 300, 600);
	}
	else if(charChoice == "Kairi")
	{
		document.getElementById("charName").innerHTML = kairi.name;
		portrait("img/Kairi.png", 300, 600);
		document.getElementById("charInfo").innerHTML = kairi.info;
		document.getElementById("weaponName").innerHTML = kairi.weapon;
		weapon("img/DestinysEmbrace.png", 300, 600);
	}
}

function portrait(source, width, height){
	var charPortrait = new Image();
	charPortrait.src = source;
	charPortrait.width = width;
	charPortrait.height = height;
	$("#charImage").html(charPortrait);
}

function weapon(source, width, height){
	var charWeapon = new Image();
	charWeapon.src = source;
	charWeapon.width = width;
	charWeapon.height = height;
	$("#charWeapon").html(charWeapon);
}