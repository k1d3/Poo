function EstructuraBase(critico, hp, ataque, dex, def) {
  this.critico = critico;
  this.hp = hp;
  this.ataque = ataque;
  this.dex = dex;
  this.def = def;
  this.atacar = function (enemigo) {
    //no es necesario darle nombre al método
    enemigo.hp -= this.ataque;
  };
}

function Asesino(critico, hp, ataque, dex, def) {
  this.super = EstructuraBase;
  this.super(critico, hp, ataque, dex, def);
  this.ataqueFantasma = function (enemigo) {
    enemigo.hp -= this.ataque * 5;
  };
}
function Mob(critico, hp, ataque, dex, def) {
  this.super = EstructuraBase;
  this.super(critico, hp, ataque, dex, def);
  this.golpeDeRoca = function (enemigo) {
    enemigo.hp -= this.ataque + this.def;
  };
}

Asesino.prototype = new EstructuraBase();
Asesino.prototype.constructor = Asesino;

Mob.prototype = new EstructuraBase();
Mob.prototype.constructor = Mob;

const asesino = new Asesino(50, 500, 10, 20, 3.5);
const mob = new Mob(30, 700, 6, 7, 8);

let contador1 = 0;
let contador2 = 0;
const pelea = setInterval(function atacking() {
  if (contador1 === 6) {
    asesino.ataqueFantasma(mob);
    console.log("Asesino atacó con Ataque Fantasma");
    contador1 = 0;
  } else asesino.atacar(mob);
  if (mob.hp <= 0) {
    console.log(`Has ganado la batalla`);
    clearInterval(pelea);
    return;
  }
  if (contador2 === 3) {
    mob.golpeDeRoca(asesino);
    console.log("mob atacó con Golpe de Roca");
    contador2 = 0;
  } else mob.atacar(asesino);
  if (asesino.hp <= 0) {
    console.log(`Has perdidola batalla`);
    clearInterval(pelea);
    return;
  }
  contador1++;
  contador2++;
  console.log(`Vida asesino ${asesino.hp}`);
  console.log(`Vida del mob ${mob.hp}`);
}, 1000);
