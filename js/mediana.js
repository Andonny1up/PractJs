let list1 = [
    100,
    200,
    50,
    70,
    500,
    44444444400
];
function compareNumbers(a, b) {
    return a - b;
}

function orderSort(list){
    list.sort(compareNumbers);
    console.log(list);
    return list;
}

function esPar(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function CalcularPromedio(list) {
    const sumaLista = list.reduce(
        function (valorAcumulado=0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const PromedioLista = sumaLista / list.length;
    return PromedioLista;
}

function calcularMediana(list){
    const mitadList = parseInt(list.length /2);
    let mediana;
    if(esPar(list.length)){
        const elemento1 = list[mitadList - 1];
        const elemento2 = list[mitadList];
        
        const promedioList = CalcularPromedio([elemento1,elemento2]);

        mediana = promedioList;
    }else{
        mediana = list[mitadList];
    }
    console.log(mediana);
    return mediana;
}
