//Utils
function esPar(number){
    return number % 2 === 0;
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
//Mediana salario
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(a,b){
        return a - b;
    }
);


function medianaSalarios(list) {
    let mediana;
    let mitad = parseInt(list.length / 2);

    if (esPar(list.length)) {
        let personitaMitad1 = list[mitad-1];
        let personitaMitad2 = list[mitad]

        let promedioList = CalcularPromedio([personitaMitad1,personitaMitad2]);
        mediana = promedioList;    
    }else{
        mediana = list[mitad];
    }
    return mediana;
}
const medianaGeneral = medianaSalarios(salariosColSorted);
//Mediana top 10%
const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10 = medianaSalarios(salariosColTop10);
//Imprimir
console.log({
    medianaGeneral,
    medianaTop10,
});