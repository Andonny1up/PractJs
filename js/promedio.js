const list1 = [
    100,
    200,
    300,
    400,
    500
];

function CalcularPromedio(list) {
    // let sumaLista = 0;
    // for (let index = 0; index < list.length; index++) {
    //     sumaLista += list[index];
    // }

    const sumaLista = list.reduce(
        function (valorAcumulado=0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const PromedioLista = sumaLista / list.length;
    console.log(PromedioLista);
    return PromedioLista;
}