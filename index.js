// Definir el nombre y la XP del héroe
let nomeDoHeroi = "Super Héroe";
let xpDoHeroi = 7500;

// Utilizar una estructura de decisión para determinar el nivel del héroe
let nivelDoHeroi;

if (xpDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}

// Mostrar la salida
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
