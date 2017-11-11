function character(name, info, weapon){
	this.name = name;
	this.info = info;
	this.weapon = weapon;
}

var sora = new character(
	"Sora", 
	"Sora is the main protagonist of the series. After becoming the chosen keyblade wielder Sora travelled across many different Disney worlds, locking keyholes and defeating the heartless.", 
	"Keyblade"
);

var riku = new character(
	"Riku",
	"Throughout the entirety of the series, Riku has been on a journey to save himself from the darkness he gave into back on Destiny Islands. Learning to journey through the middle road of light and darkness, Riku walks on the path of the way to dawn.",
	"Way To The Dawn"
);

var kairi = new character(
	"Kairi",
	"Kairi is one of the 7 princesses of light, and recently began wielding a keyblade due to touching Aqua's keyblade at a young age. As we are in the story, Kairi is gearing up to learn how to properly wield the keyblade for the battles to come.",
	"Destiny's Embrace"
);

function displayChar(charChoice){
	if(charChoice == "Sora")
	{
		document.getElementById("charName").innerHTML = sora.name;
		document.getElementById("charInfo").innerHTML = sora.info;
		document.getElementById("weaponName").innerHTML = sora.weapon;

		if($(window).width() < 960){
			portrait("img/Sora.png", 210, 400);
			weapon("img/KingdomKey.png", 180, 400);
		}
		else{
			portrait("img/Sora.png", 320, 600);
			weapon("img/KingdomKey.png", 260, 600);
		}
		
	}
	else if(charChoice == "Riku")
	{
		document.getElementById("charName").innerHTML = riku.name;
		document.getElementById("charInfo").innerHTML = riku.info;
		document.getElementById("weaponName").innerHTML = riku.weapon;

		if($(window).width() < 960){
			portrait("img/Riku.png", 200, 400);
			weapon("img/Waytodawn.png", 200, 400);
		}
		else{
			portrait("img/Riku.png", 300, 600);
			weapon("img/Waytodawn.png", 300, 600);
		}
	}
	else if(charChoice == "Kairi")
	{
		document.getElementById("charName").innerHTML = kairi.name;
		document.getElementById("charInfo").innerHTML = kairi.info;
		document.getElementById("weaponName").innerHTML = kairi.weapon;

		if($(window).width() < 960){
			portrait("img/Kairi.png", 210, 400);
			weapon("img/DestinysEmbrace.png", 180, 400);
		}
		else{
			portrait("img/Kairi.png", 320, 600);
			weapon("img/DestinysEmbrace.png", 260, 600);
		}
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