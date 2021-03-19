// -------------------------------------------------------------- Metode ES6 --------------------------------------------------------------  
// 1. Object.assign() - copiaza proprietati din unul sau mai multe obiect sursa catre un obiect target. 
// Poate fi folosit pentru a combina 2 sau mai multe obiecte.
let target = {a: 1, b: 2};
let source = {c:3, d:4 };
let obj = Object.assign({},target,source);
// Pentru a ne asigura ca obiectul target nu va fi modificat adaugam in lista de parametrii un obiect gol {}
console.log(target);
console.log(obj);

// 2. array.find() si array.findIndex() - metode ce gasesc un element sau indexul unui element dintr-un array in functie de o anumita conditie.
//  * find() va returna primul element gasit ce satisface conditia

let array = ['a','b','c','d'];

console.log(array.find(element => element == 'b')); // output : b
console.log(array.findIndex(element => element == 'b'));// output: 1

// 3.string.repeat() - metoda ce returneaza un nou string concatenand string-ului initial pe el insusi de un numar de ori dat de parametru
let str = "la";
console.log(str.repeat(3)); // output: lalala

// 4. string.indcludes(), string.startsWith(), string.endsWith() - multiple metode ce ajuta la cautarea unor fragmente dintr-un string
let str2 = "start";
console.log(str2.includes('t')); // output: true
console.log(str2.startsWith('s')); // output: true
console.log(str2.endsWith('t')); // output: true

// 5. Number.isNaN(), Number.isFinite() - metode ce asista in verificarea non-numerelor sau a numerelor finite
console.log(Number.isNaN(10)); // output: false 
console.log(Number.isNaN(NaN)); // output: true
console.log(Number.isFinite(Infinity)); // output: false
console.log(Number.isFinite(10)); // output: true

// 6. Math.sign() - metoda ce determina semnul unui numar
console.log(Math.sign(120)); // output: 1 
console.log(Math.sign(-120)); // output: -1 

// ----------------------------------------------------------- let, const & var ---------------------------------------------------------
//  - variabilele de tipul var sunt globale sau function scoped in timp ce let si const sunt block scoped (if, for/while loops etc)
function functie() {
    var variabila = "salut";
}
//console.log(variabila); // eroare, variabila nu este definit
//  - variabilele de tipul var pot fi redeclarate iar continutul acestora poate fi modificat in timp ce pentru variabilele de tipul
var salut = "hello";
var salut = "hello again";

//    let acestea pot fi modificate dar nu redeclarate iar const nu poate fi nici una nici cealalta.
let variabila2 = "salut";
variabila2 = "salut din nou";
//  - var este initializat by default cu undefined in timp ce let si const nu sunt initializate by default.
//  - const trebuie sa fie initializat la declarare in schimb let si var pot fi declarate fara a fi initializate.  
let a;
var b;
// const c; eroare!!
const c = 'c';

// ----------------------------------------------------------- Spread operator ---------------------------------------------------------
// Operatorul spread (...) permite unui obiect iterabil precum un array sau un string sa fie extins in elemente individuale

let numere = [1, 2, 3, 4];
let suma = (a, b, c, d) => a + b + c + d;
let sumaNumerelor = suma(...numere);
console.log(sumaNumerelor); // output: 10

let numere2 = [1, 2, 3];
let numere3 = [...numere2]; // permite deep copy atat timp cat elementele nu sunt nested

// ----------------------------------------------------------- Obiecte ---------------------------------------------------------
// 1. Iterarea unui obiect se poate realiza prin metoda Object.entries() ce returneaza un array ale carui elemente sunt alte array-uri ce 2 elemente: cheie (numele proprietatii) respectiv valoare
let obiect = {
    prop1: 12,
    prop2: "sarmale",
    prop3: 1000
}
console.log(Object.entries(obiect)); // output: [ [ 'prop1', 12 ], [ 'prop2', 'sarmale' ], [ 'prop3', 1000 ] ]
// O alta metoda utilizeaza for...in
for (const proprietate in obiect) {
    console.log(`${proprietate}: ${obiect[proprietate]}`);
}
// 2. Deep copy - operatorul spread poate fi folosit pentru a face deep copy atat timp cat elementele nu sunt nested

let x = [1,2,[3,[4,5]]];
let d = [...x];

console.log(d[2] === x[2]); // output: true elementul din d este o referinta catre arrayul din x (cele 2 au aceeasi referinta)

d[2] = [...x[2]];// am copiat din nou, element cu element
console.log(d[2] === x[2]); // output: false

console.log(d[2][1] === x[2][1]); // output: true 
d[2][1] = [...x[2][1]];
console.log(d[2][1] === x[2][1]); // output: false

// ----------------------------------------------------------- Arrays ---------------------------------------------------------
// 1. Accessor - accesarea se face utilizand indexul
let arr = ["primul element", "al doilea element","al treilea element"];
console.log(arr[0]); // output: primul element
// 2. Iterarea peste array se poate face atat cu un for clasic de forma
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// sau cu ajutorul unui forEach
arr.forEach((element) => {
    console.log(element);
})
// 3. Metodele de tipul mutator vor modifica arrayul initial
// sort() - sorteaza elementele din array

let arrSortat = [10, 2, 4, 100];

arrSortat.sort((a,b) => a - b);

console.log(arrSortat); // ouptut: [ 2, 4, 10, 100 ]
// unshift() - adauga una sau mai multe elemente la inceputul arrayului
arrSortat.unshift(1); // valoarea returnata este noua dimensiune a array-ului
console.log(arrSortat); // ouptut: [ 1, 2, 4, 10, 100 ]

// shift() - sterge ultimul element
arrSortat.unshift();

// splice() - sterge sau inlocuieste elemente existente sau adauga elemente noi
// returneaza arrayul de elemente sterse 

arrSortat.splice(3);
console.log(arrSortat); // raman doar primele 3 elemente in array

// push() - adauga un element nou la finalul array-ului
arrSortat.push(3);
console.log(arrSortat); // output: [ 1, 2, 4, 3 ]

// pop() - sterge ultimul element
arrSortat.pop();
console.log(arrSortat); // output: [ 1, 2, 4 ]

// reverse() - inverseaza array-ul
arrSortat.reverse();
console.log(arrSortat); // output: [ 4, 2, 1 ]

// fill() - seteaza aceeasi valoarea pentru elementele selectate
console.log(arrSortat.fill(0, 1, 3)); // output: [ 4, 0, 0] -> punem 0 incepand cu pozitia 1 si pana la pozitia 3

// ----------------------------------------------------------- Promises ---------------------------------------------------------
// callback - cand o functie accepta ca argument o alta functie 
// Promise - obiect ce reprezinta eventualul rezultat al unei metode asincrone. Acestui obiect ii sunt atasate functii de tip callback
// Promisiunile vin cu garantia ca orice callback adaugat prin mecanismul .then() nu va fi invocat inainte de terminarea promisiunii
// Multiple callback-uri pot fi adaugate invocand then() de mai multe ori iar acestea vor fi invocate la randul lor in ordinea in care au venit
// Promisiunile au 3 stari - pending(starea initiala inainte de a incepe operatia), fulfilled(operatia s-a finalizat) si rejected(operatia nu s-a finalizat)

let vreme = true;
let activitate = new Promise((resolve, reject) => {
    if (vreme) {
        const detalii = {
            locatie: "plaja",
            deFacut: "distrat"
        };
        resolve(detalii);
    } else {
        reject(new Error("Vreme urata, nu avem activitati"));
    }
});

activitate
    .then((done) => {
        console.log(`Am mers la ${done["locatie"]} si ne-am ${done["deFacut"]}`);
    })
    .catch((error) => {
        console.log(error);
    });

// ----------------------------------------------------------- Programare asincrona ---------------------------------------------------------
// O functie asincrona returneaza o promisiunea - daca functia returneaza o valoare functia va fi rezolvata cu aceea valoarea daca nu va fi respins cu acea valoare

let foo = () => {
    return Promise.reject(-1);
}
// Similar cu
let foo2 = async () => {
    throw -1;
} 
// foo2() arunca errori

// await este utilizat numai pentru functii async. Keyword-ul este folosit pentru a garanta ca toate promisiunie returnate de functii async sunt sincronizate, ca se asteapta una pe cealalta.
// mai exact await face ca o functie async sa faca o pauza pana cand promisiunea este terminata (fulfilled sau rejected)

function rezolvaDupa5(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }
  
  async function functieAsync() {
    var x = await rezolvaDupa5(10);
    console.log(x); // 10
  }
  
  functieAsync(); // afiseaza 10 dupa ce asteapta 5 secunde (rezolvarea promisiunii)

  // ----------------------------------------------------------- Closure ---------------------------------------------------------
  // closure - reprezinta combinatii de functii ce au referinte catre state-ul din jur. Closure ofera acces la outer scope-ul unei functii dintr-o inner function
  
  var suma2 = (function () {
    var count = 0;
    return function () {count += 1; return count}
  })();
  
  suma2();
  suma2();
  suma2();
  console.log(suma2()); // Output: count = 4
 // Variabilei suma2 ii este atribuita valoarea returnata de self-invoked function. Acesata ruleaza o singura data si initializeaza count cu 0 ulterior returnand expresia unei functii.
 // suma2() devine o functie si are acces la variabila count din outer scope. 