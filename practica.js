//Primer ejercicio

const res1 = [-1,5,6,,3];
const res2 =[14,3,5,6];
const res3 = [8,15,100];

function sumResistence(arr) {
    const arr2 = [];
    arr.forEach((e) => arr2.push(Math.abs(e)));
    let res = 0;
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach((e) => (res = res +e));
    console.log(`${res} ohms`)
}
  
function sumResistence2(arr) {
    let res = 0;
    for (let i = 0; i < arr. length; i++) {
        res += Math.abs(arr[i]);
    }
    return res;
}

sumResistence(res3);
const try2 = sumResistence2(res1);
console.log('${try2}');

// Sociedad secreta
const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
const member3 = ["Harry", "Ron", "Hermaioni"];

function secretName(arr) {
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    return res.sort().join("");

}

console.log(secretName(member1));
console.log(secretName(member2));

//Numero dividido

const n = 4;
const n2 = 10;

function numDiv(num) {
    let res = [];
    const half = num / 2;
    res.push(half);
    res.push(half);
    return res;

}

// Array of multiples

console.log(numDiv(n2));

const arrayOfMultiples = (a,b) =>{
    let arr = [];
    let x = 1;
    for (let i = 1; i <= b; i++) {
        arr-push(a * x);
        x++;
    }
    return arr;
};