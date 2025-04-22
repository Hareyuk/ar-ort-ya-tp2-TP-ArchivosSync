import apareo from './src/apareo.js';
import fileUtils from './src/utils/fileUtils.js';
import transformUtils from './src/utils/transformUtils.js';

const { combinarDosArrays, combinarNArrays } = apareo;
const { leerArchivoComoString, escribirTextoEnArchivo } = fileUtils;
const { transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString } = transformUtils;
// leo los 4 archivos a memoria
console.log("###### LEER LOS 4 ARCHIVOS ######");
let archivo1 = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in');
let archivo2 = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in');
let archivo3 = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in');
let archivo4 = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in');
console.log(`Archivo 1: ${archivo1}`);
console.log(`Archivo 2: ${archivo2}`);
console.log(`Archivo 3: ${archivo3}`);
console.log(`Archivo 4: ${archivo4}`);
console.log();

// preparo los 4 arrays a partir de los archivo leidos
console.log("###### OBTENGO LOS ARRAYS DE LOS 4 ARCHIVOS LEÍDOS ######");
let array1 = transformarStringEnArrayDeNumeros(archivo1, ",");
let array2 = transformarStringEnArrayDeNumeros(archivo2, ",");
let array3 = transformarStringEnArrayDeNumeros(archivo3, ",");
let array4 = transformarStringEnArrayDeNumeros(archivo4, ",");
console.log(`Array 1: ${array1}`);
console.log(`Array 2: ${array2}`);
console.log(`Array 3: ${array3}`);
console.log(`Array 4: ${array4}`);
console.log();


//Escribo archivos de prueba
escribirTextoEnArchivo('./out/test1.txt', 'Probando crear archivo.', true);
escribirTextoEnArchivo('./out/test2.txt', 'Probando crear archivo no permitido.', false);
escribirTextoEnArchivo('./out/test1.txt', 'Probando sobreescribir el archivo.', false);

// combino los primeros dos arrays
console.log("###### COMBINANDO ARRAYS ######");
let arrays1and2combined = combinarDosArrays(array1, array2);
escribirTextoEnArchivo('./out/primeros_dos_arrays_combinados.out', arrays1and2combined, true);
console.log(`Array 1 y 2 combinados: ${arrays1and2combined}`);

// combino los cuatro arrays
let arrays3and4combined = combinarDosArrays(array3, array4);
let allArraysCombined = combinarDosArrays(arrays1and2combined, arrays3and4combined);
escribirTextoEnArchivo('./out/los_cuatro_arrays_combinados.out', allArraysCombined, true);
console.log(`Los 4 arrays combinados: ${allArraysCombined}`);
console.log();


console.log("###### OTROS TESTS ######");
//Test de la función transformarStringEnArrayDeNumeros
let testToArray = transformarStringEnArrayDeNumeros('123 | 45.6 | 789 | 1bc | 10', "|");
console.log(`Test de transformar string en array: ${testToArray}`);
escribirTextoEnArchivo('./out/test_transformar_string_en_array.out', testToArray, true);

//Test de la función transformarArrayDeNumerosAUnSoloString
let testToString = transformarArrayDeNumerosAUnSoloString([231, 123, 11, 12, 2.5,2], ", ");
escribirTextoEnArchivo('./out/test_transformar_array_en_string.out', testToString, true);
console.log(`Test 2 de transformar array en string: ${testToString}`);

//Test de la funcion combinarNArrays
let testCombined = combinarNArrays([[2,4,5],[5,10], [200, 210], [210,300]]);
escribirTextoEnArchivo('./out/test_combinar_arrays_en_uno.out', testCombined, true);
console.log(`Test 3 combinar los arrays de un array en uno: ${testCombined}`);

//Test de la funcion combinarDosArrays
let testCombineTwo = combinarDosArrays([2,4,5],[5,10]);
escribirTextoEnArchivo('./out/test_combinar_dos_arrays.out', testCombineTwo, true);
console.log(`Test 4 combinar dos arrays: ${testCombineTwo}`);
