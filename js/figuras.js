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