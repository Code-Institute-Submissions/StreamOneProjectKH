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

function displayChar(charChoice){
	if(charChoice == "Sora")
	{
		document.getElementById("charName").innerHTML = sora.name;
		portrait("img/Sora.png");
		document.getElementById("charInfo").innerHTML = sora.info;
		weapon("img/Oathkeeper.png");
	}
	if(charChoice == "Riku")
	{
		document.getElementById("charImage").innerHTML = riku.charImg;
	}
}

function portrait(source){
	var charPortrait = new Image();
	charPortrait.src = source;
	$("#charImage").html(charPortrait);
}

function weapon(source){
	var charWeapon = new Image();
	charWeapon.src = source;
	$("#charWeapon").html(charWeapon);
}