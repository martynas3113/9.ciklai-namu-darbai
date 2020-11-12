



// Apskaiciuoti skaiuciu suma intervale nuo [1:100] imtinai



 
const pirmasRezis = 1;  /*intervalas NUO*/
const antrasRezis = 100;  /*intervalas IKI*/
let rezultatas = 0;
let suma = 0;

for (let i = pirmasRezis; i <= antrasRezis; i++) {
    suma =  i;
    rezultatas = rezultatas+suma;
    
    
}
console.log(rezultatas);



// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo

const zodis = 'abcdef'
let result = '';

for (let i = zodis.length - 1; i >=0 ; i--) {
     result = result +zodis[i];
    
    
}
console.log(result);

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai.

// a. 0-11


const daliklis = 3;  /* IS KIEK DALINAM*/ 
const pirmasIntervalas = 0; /* PIRMAS INTERVALO SKAICIUS*/
const antrasintervalas = 11;  /* ANTRO INTERVALO SKAICIUS*/
let kiekis = 0; /* SKAICIU KIEKIS KURIE DALINASI BE LIEKANOS*/

for (let i = pirmasIntervalas;  i<= antrasintervalas; i++) {
    if (i % daliklis===0 ) {
        kiekis = kiekis + 1
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai`);

const daliklis2 = 5
const pirmasIntervalas2 = 0;
const antrasintervalas2 = 11;
let kiekis2 = 0;

for (let i = pirmasIntervalas2;  i<= antrasintervalas2; i++) {
    if (i % daliklis2===0 ) {
        kiekis2 = kiekis2 + 1
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${daliklis2} yra ${kiekis2} vienetai`);

const daliklis3 = 7;
const pirmasIntervalas3 = 0;
const antrasintervalas3 = 11;
let kiekis3 = 0;

for (let i = pirmasIntervalas3;  i<= antrasintervalas3; i++) {
    if (i % daliklis3===0 ) {
        kiekis3 = kiekis3 + 1
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${daliklis3} yra ${kiekis3} vienetai`);



