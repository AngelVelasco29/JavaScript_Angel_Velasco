var teclas;
var uno;
var dos;
var tres;
var cuatro;
var cinco;
var seis;
var siete;
var ocho;
var nueve;
var cero;
var punto;
var igual;
var suma;
var resta;
var multiplicacion;
var division;
var raiz;
var sumres;
var onc;
var numero1=""
var numero2=""
var operador=""

teclas=document.getElementsByClassName("tecla")
pantalla=document.getElementById("display")
onc=teclas[0];
sumres=teclas[1];
raiz=teclas[2];
division=teclas[3];
siete=teclas[4];
ocho=teclas[5];
nueve=teclas[6];
multiplicacion=teclas[7];
cuatro=teclas[8];
cinco=teclas[9];
seis=teclas[10];
resta=teclas[11];
uno=teclas[12];
dos=teclas[13];
tres=teclas[14];
cero=teclas[15];
punto=teclas[16];
igual=teclas[17];
suma=teclas[18];


onc.onclick=borrar;
sumres.onclick=sumaresta;
raiz.onclick=raizc;
division.onclick=dividir;
siete.onclick=num7;
ocho.onclick=num8;
nueve.onclick=num9;
multiplicacion.onclick=multiplicar;
cuatro.onclick=num4;
cinco.onclick=num5;
seis.onclick=num6;
resta.onclick=restar;
uno.onclick=num1;
dos.onclick=num2;
tres.onclick=num3;
cero.onclick=num0;
punto.onclick=puntod;
igual.onclick=iguala;
suma.onclick=sumar;

function borrar(){
	onc.style.padding="3px";
	numero1="";
	pantalla.innerHTML=0;
	setTimeout(function(){
		onc.style.padding="0px";
	},100);
}

function sumaresta(){
	sumres.style.padding="3px";
	verificacion("-")
	setTimeout(function(){
		sumres.style.padding="0px";
	},100);
}

function raizc(){
	raiz.style.padding="3px";
	setTimeout(function(){
		raiz.style.padding="0px";
	},100);
}

function dividir(){
	division.style.padding="3px";
	numero2=numero1
	numero1=""
	pantalla.innerHTML=numero1
	operador="/"
	setTimeout(function(){
		division.style.padding="0px";
	},100);
}

function num7(){
	siete.style.padding="3px";
	verificacion(7)
	setTimeout(function(){
		siete.style.padding="0px";
	},100);
}

function num8(){
	ocho.style.padding="3px";
	verificacion(8)
	setTimeout(function(){
		ocho.style.padding="0px";
	},100);
}

function num9(){
	nueve.style.padding="3px";
	verificacion(9)
	setTimeout(function(){
		nueve.style.padding="0px";
	},100);
}

function multiplicar(){
	multiplicacion.style.padding="3px";
	numero2=numero1
	numero1=""
	pantalla.innerHTML=numero1
	operador="*"
	setTimeout(function(){
	multiplicacion.style.padding="0px";
	},100);
}

function num4(){
	cuatro.style.padding="3px";
	verificacion(4)
	setTimeout(function(){
	cuatro.style.padding="0px";
	},100);
}

function num5(){
	cinco.style.padding="3px";
	verificacion(5)
	pantalla.innerHTML=numero1;
	setTimeout(function(){
	cinco.style.padding="0px";
	},100);
}

function num6(){
	seis.style.padding="3px";
	verificacion(6)
	setTimeout(function(){
	seis.style.padding="0px";
	},100);
}

function restar(){
	resta.style.padding="3px";
	numero2=numero1
	numero1=""
	pantalla.innerHTML=numero1
	operador="-"
	setTimeout(function(){
	resta.style.padding="0px";
	},100);
}

function num1(){
	uno.style.padding="3px";
	verificacion(1)
	setTimeout(function(){
	uno.style.padding="0px";
	},100);
}

function num2(){
	dos.style.padding="3px";
	verificacion(2)
	setTimeout(function(){
	dos.style.padding="0px";
	},100);
}

function num3(){
	tres.style.padding="3px";
	verificacion(3)
	setTimeout(function(){
	tres.style.padding="0px";
	},100);
}

function num0(){
	cero.style.padding="3px";
	verificacion(0)
	setTimeout(function(){
	cero.style.padding="0px";
	},100);
}

function puntod(){
	punto.style.padding="3px";
	verificacion(".")
	setTimeout(function(){
	punto.style.padding="0px";
	},100);
}

function iguala(){
	igual.style.padding="3px";
	switch (operador) {
		case "+": numero1=Calculadora.sumar(Number(numero1),Number(numero2))
			pantalla.innerHTML=numero1;
			break;
		case "-": numero1=Calculadora.restar(Number(numero1),Number(numero2))
			pantalla.innerHTML=numero1;
			break;
		case "*": numero1=Calculadora.multiplicar(Number(numero1),Number(numero2))
			pantalla.innerHTML=numero1;
			break;
		case "/": numero1=Calculadora.dividir(Number(numero1),Number(numero2))
			pantalla.innerHTML=numero1;
			break;
		default:

	}
	setTimeout(function(){
	igual.style.padding="0px";
	},100);
}

function sumar(){
	suma.style.padding="3px";
	numero2=numero1
	numero1=""
	pantalla.innerHTML=numero1
	operador="+"
	setTimeout(function(){
	suma.style.padding="0px";
	},100);
}

function verificacion(numero){
	var tam
	if(numero1.includes(".")){
		tam=9
	}else{
		tam=8
	}
	if(numero=="-"&&numero1==""){

	}else if(numero1.includes("-")&&numero=="-"){
		numero1=numero1.slice(1,9);
		pantalla.innerHTML=numero1;
	}else if(!numero1.includes("-")&&numero=="-"){
		numero1="-"+numero1
		pantalla.innerHTML=numero1;
	}else	if (numero=="0"&&numero1=="") {

	}else	if(numero=="."&&numero1==""){
		numero1="0."
		pantalla.innerHTML=numero1;
	}else if(numero1.includes(".")&&numero=="."){

	}else if(numero1.length<tam){
	numero1+=numero;
	pantalla.innerHTML=numero1;
	}

}


var Calculadora=(function(){

	function configurar(resultadoNum) {
		resultadoNum=resultadoNum.toPrecision(5)
		resultadoNum=resultadoNum.toString()
		console.log(resultadoNum)
		return resultadoNum
	}

	return{
		sumar: function(num1,num2){
			resultado=num1+num2
			configurar(resultado)
			return resultado
		},
		restar: function(num1,num2){
			resultado=num2-num1
			configurar(resultado)
			return resultado
		},
		multiplicar: function(num1,num2){
			resultado=num1*num2
			configurar(resultado)
			return resultado

		},
		dividir: function(num1,num2){
			resultado=num2/num1
			configurar(resultado)
			return resultado

		}
	}
})();
