//codigo del cuadrado
console.group("Cuadrado");

    function PerimetroCuadrado(lado) {
        return 4 * lado;
    }

    function AreaCuadrado(lado) {
        return lado * lado;
    }

console.groupEnd();
//codigo del cuadrado

//codigo del Triangulo
console.group("Triangulo");

    function PerimetroTriangulo(base,lado1,lado2) {
        return base + lado1 + lado2;
    }

    function AreaTriangulo(base,altura) {
        return (base * altura)/2;
    }

console.groupEnd();
//codigo del Triangulo

//codigo del Circulo
console.group("Circulo");
    const radioCirculo = 4;
    const PI = Math.PI;

    function DiametroCirculo(radio) {
        return 2 * radio;
    }

    function PerimetroCirculo(radio) {
        diametro = DiametroCirculo(radio);
        return diametro * PI;
    }

    function AreaCirculo(radio) {
        return (radio * radio) * PI;
    }
console.groupEnd();
//codigo del Circulo

//interaccion html 
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = AreaCuadrado(value);
    alert(area);
}
/*triangle*/
function CalcularPerimetroTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const base = Number(inputBase.value);
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(inputLado2.value);

    const perimetro = PerimetroTriangulo(base,value1,value2);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase1");
    const base = Number(inputBase.value);
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const altura = Number(inputAltura.value);

    const area = AreaTriangulo(base,altura);
    alert(area);
}