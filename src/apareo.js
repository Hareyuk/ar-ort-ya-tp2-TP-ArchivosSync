/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    let arrCombined = [...arrA, ...arrB];
    return borrarDuplicadosYOrdenar(arrCombined);
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    //https://stackoverflow.com/questions/43455911/using-es6-spread-to-concat-multiple-arrays
    let newArr = [].concat(...arrs);
    return borrarDuplicadosYOrdenar(newArr);
}

function borrarDuplicadosYOrdenar(arr)
{
    let arrNonDuplicated = [...new Set(arr)]
    let arrSorted = arrNonDuplicated.sort((a,b) => a-b)
    return arrSorted;
}

// exportar ambas funciones
export default 
{
    combinarDosArrays,
    combinarNArrays
}