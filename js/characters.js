function character(name, charImg, info, weapon){
	this.name = name;
	this.charImg = charImg;
	this.info = info;
	this.weapon = weapon;
}

var sora = new character(
	"Sora", 
	soraImg, 
	"Sora is the main protagonist", 
	"Keyblade"
);

var soraImg = new Image();
soraImg.src = "img/Sora.png";

var riku = new character(
	"Riku",
	"img/riku.png",
	"Riku is a complex guy",
	"Way To The Dawn"
);

document.getElementById("testchar").innerHTML = sora.charImg;