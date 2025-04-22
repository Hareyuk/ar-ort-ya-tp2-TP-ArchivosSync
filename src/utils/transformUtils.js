/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    str.replace(' ', '');
    const arrSplitted = str.split(separador);
    const numArrs = arrSplitted.map(data =>
    {
        //Obtenido de: https://stackoverflow.com/questions/10398931/how-to-remove-text-from-a-string
        //Quita todos los caracteres no numéricos.
        return data.replace(/[^0-9\.]+/g, "");
    }
    );
    return numArrs;
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    let str = "";
    return arr.reduce((accum, currentValue, index)=>
    {
        return arr.length - 1 > index ? accum + currentValue + separador : accum + currentValue;
    }, str);
}

// exportar ambas funciones
export default
{
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString
}