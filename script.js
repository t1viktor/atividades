/* const ages = [32, 33, 12, 40]

function checkAge(age){
    return age > document.getElementById('ageToCheck').value;

}

function myFunction(){
    document.getElementById('demo').innerHTML = ages.filter(checkAge);
}   */
////////////////////////////////////////////////////////////////////////////////////
/* const numeros = [5, 10, 15, 20];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log('array original', numeros);
console.log('soma dos numeros', soma); */

////////////////////////////////////////////////////////////////////////////////////

/* const frutas = ['maça', 'banana', 'manga']

frutas.forEach(function(fruta,i){
    console.log(`fruta ${fruta} indice ${index}`)
})
 */

////////////////////////////////////////////////////////////////////////////////////
/* const array = [50, 45, 67, 89, 10,5]

const arrayX2 = array.map(array => array * 2);
console.log(arrayX2)

const par = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const parItem = par.filter(par => par % 2 === 0)
console.log(parItem)

const soma = [1,2,3,4,5,6]
const somaItem = soma.reduce((acumulador, numero) => acumulador + numero,0);
console.log(somaItem)

const quadrado = [5,10,15,20,30]
const somaQuadrado = quadrado.map(soma => soma ** 2)
console.log(somaQuadrado)
 */

/////////////////////////////////////////////////////////////////

const strings = ['banana', 'maça', 'uva']

const stringsUp = strings.map(elemento => elemento.toUpperCase());
console.log(stringsUp)

const palavras = ['um', 'dois', 'tres', 'quatro', 'cinco', 'dezesseis']
const cincoC = palavras.filter(elemento => palavras.length > 5)
console.log(cincoC)

