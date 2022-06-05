const list1 =[
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

function calcularModa(list) {
    const list1Count ={};

    list.map(
        function (element) {
            if(list1Count[element]){
                list1Count[element] += 1;
            }else{
                list1Count[element] = 1;
            }   
        }
    );  
    const list1Array = Object.entries(list1Count).sort(
        function(a,b){
            return a[1] - b[1];
        }
    );
    const modaArray = list1Array[list1Array.length-1];
    const moda = modaArray[0];
    return moda;
}




