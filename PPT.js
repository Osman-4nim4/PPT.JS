var maquina;
var movmaquina
var usuario
var movusuario
var resultado
function aleatorio(mini,max){
    return Math.random()*(max-mini)+mini;

}

maquina=Math.floor(aleatorio(1,4));

if (maquina==1){
    movmaquina="Piedra";
}

if (maquina==2){
    movmaquina="Papel";
}

if (maquina==3){
    movmaquina="Tijera";
}

usuario=parseInt(prompt("Seleccione una opcion \n 1.Piedra. \n 2.Papel. \n 3.Tijera." ));

if (usuario==1){
    movusuario="Piedra";
}

if (usuario==2){
    movusuario="Papel";
}

if (usuario==3){
    movusuario="Tijera";}

console.log("La maquina saca"+movmaquina);
console.log("El usuario saca"+movusuario);

if (movmaquina=="Piedra" && movusuario=="Piedra"){
    resultado="Empate";
}

if (movmaquina=="Piedra" && movusuario=="Papel"){
    resultado="Papel le gana a piedra,Gana Humano";


if (movmaquina=="Piedra" && movusuario=="Tijera"){
    resultado="Piedra gana a tijera,Gana Maquina";
}

if (movmaquina=="Papel" && movusuario=="Papel"){
    resultado="Empate";
}


if (movmaquina=="Papel" && movusuario=="Piedra"){
    resultado="Papel gana a piedra,Gana Maquina";
}


if (movmaquina=="Papel" && movusuario=="Tijera"){
    resultado="Tijera gana a papel,Gana Usuario";
}



if (movmaquina=="Tijera" && movusuario=="Tijera"){
    resultado="Empate";
}


        
if (movmaquina=="Tijera" && movusuario=="Papel"){
    resultado="Tijera gana a papel,Gana maquina ";
}



if (movmaquina=="Tijera" && movusuario=="Piedra"){
    resultado="Piedra gana a tijera,Gana Usuario ";
}

console.log(resultado)

}
