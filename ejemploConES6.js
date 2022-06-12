class EstructuraBase {
  #critico 
  #hp 
  #ataque 
  #dex 
  #def 
  #exp
  #lvl
  constructor(critico, hp, ataque, dex, def,) {
    
    this.#critico = critico;
    this.#hp = hp;
    this.#ataque = ataque;
    this.#dex = dex;
    this.#def = def;
    this.#exp=0;
    this.#lvl=1;
  }
  //fuera del constructor ponemos los métodos
  atacar(enemigo) {
    enemigo.#hp -= this.#ataque-this.#def/3;
  }
  
}

class Asesino extends EstructuraBase {
  constructor(critico, hp, ataque, dex, def, mp) {
    super(#critico, #hp, #ataque, #dex, #def);
    this.#mp = mp;
    this.#exp=0
    this.#lvl=1
  }
  ataqueFantasma(enemigo) {
    enemigo.#hp -= this.#ataque * 5-enemigo.#def;
  }
  exp(){
    this.#exp+=50;
    if(exp>200)this.#lvl++
  }
  arteNinja(){
    this.#hp+=40;
  }
}
class Mob extends EstructuraBase {
  constructor(critico,hp, ataque, dex, def) {
    super(#critico, #hp, #ataque, #dex, #def);
  }
  golpeDeRoca(enemigo) {
    enemigo.#hp -= this.#ataque + this.#def;
  }
  EscudoDeRoca(){
    this.#def+=200
  }
  EscudoDeRocaOff(){
    this.#def-=200
  }
}
//esto debe ir en las opcionnes d eun sw que puede ser las de una var que tome el menu en 
//el caso de una partida nueva. 

const mob = new Mob(30, 700, 6, 7, 8);


//llamar al objeto de la db para iniciar la batalla
//respuesta es lo que se carga desde el menú de caragasi es recupero de pj o partida nueva
/*
1- nueva partida
2- cargar partida
*/
if(respuesta===1){
  const asesino = new Asesino(50, 500, 10, 20, 3.5);
} else if(respuesta===2){
  //llamado a la db para que cargue el pj
}

class Contador{
  constructor(){
  let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
  } 
contar1(){ 
  this.contador1=this.contador1++;
  
 }
 contar2(){ 
  
  this.contador2=this.contador2++;
  
 }
 contar3(){ 
  
  this.contador3=this.contador3++;
 }
 restaurar1(){
  this.contador1=0;
 }
 restaurar2(){
  this.contador2=0;
 }
 restaurar3(){
  this.contador3=0;
 }
}
const conteo = new Contador();

const pelea = setInterval(function atacking() {
  console.clear()
  if(asesino.#hp<=100){
    asesino.arteNinja()
    console.log("Se activó la Arte Ninja al estar al borde de la muerte, tu vida se recupera en 40 puntos.");
  }
  if (conteo.contar1 === 6) {
    asesino.ataqueFantasma(mob);
    console.log("Asesino atacó con Ataque Fantasma");
    contador1 = 0;
  } else asesino.atacar(mob);
  if (mob.hp <= 0) {
    asesino.exp();
    console.log(`Has ganado la batalla`);
    let progreso=confirm("En hora buena, quieres guardar tu progreso?")
    if (progreso){
      //llamar a la db y guardar el objeto!!!!!!!!!!!!
      //promero generar un menú con los pj de la db y luego seleccionar uno para traer y jugar
    }
    clearInterval(pelea);
    return;
  }
  if (contador2 === 3) {
    mob.golpeDeRoca(asesino);
    console.log("mob atacó con Golpe de Roca");
    contador2 = 0;
  } else mob.atacar(asesino);
  if (constador3===3){
    mob.EscudoDeRoca()
    console.log("mob utilizó Escudo de Roca, su defensa se incrementó en 200 puntos por 4 turnos");
  }else if(contador3===7){
    mob.EscudoDeRocaOff()
    constador3=0;
  }

  if (asesino.hp <= 0) {
    console.log(`Has perdidola batalla`);
    clearInterval(pelea);
    return;
  }
 
  console.log(`Vida asesino ${asesino.hp}`);
  console.log(`Vida del mob ${mob.hp}`);
}, 1000);
