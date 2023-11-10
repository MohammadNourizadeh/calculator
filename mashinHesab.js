const numAC = document.getElementById('num-AC');
const numTavan = document.getElementById('num-tavan');
const numDarsad = document.getElementById('num-darsad');
const numTaghsim = document.getElementById('num-taghsim');
const num7 = document.getElementById('num-7');
const num8 = document.getElementById('num-8');
const num9 = document.getElementById('num-9');
const numZarb = document.getElementById('num-zarb');
const num4 = document.getElementById('num-4');
const num5 = document.getElementById('num-5');
const num6 = document.getElementById('num-6');
const numTaf = document.getElementById('num-taf');
const num1 = document.getElementById('num-1');
const num2 = document.getElementById('num-2');
const num3 = document.getElementById('num-3');
const numJam = document.getElementById('num-jam');
const num0 = document.getElementById('num-0');
const numDat = document.getElementById('num-dat');
const numMosavi = document.getElementById('num-mosavi');
const safheNamayesh = document.getElementById('safhe-namayesh');

const neshan = (sign) => {
    if(sign === 'AC')
    {
        safheNamayesh.value = '';
    }else if(sign === '%'){
        safheNamayesh.value/=100;
    }else{
        safheNamayesh.value += sign;
    }
};

const equal = () => {
    if(safheNamayesh.value === '')
    {
        safheNamayesh.value === '';
    }else{
        safheNamayesh.value = eval(safheNamayesh.value);
    }
};

num1.addEventListener('click' , () => {neshan(1)})
num2.addEventListener('click' , () => {neshan(2)})
num3.addEventListener('click' , () => {neshan(3)})
num4.addEventListener('click' , () => {neshan(4)})
num5.addEventListener('click' , () => {neshan(5)})
num6.addEventListener('click' , () => {neshan(6)})
num7.addEventListener('click' , () => {neshan(7)})
num8.addEventListener('click' , () => {neshan(8)})
num9.addEventListener('click' , () => {neshan(9)})
num0.addEventListener('click' , () => {neshan(0)})
numJam.addEventListener('click' , () => {neshan('+')})
numTaf.addEventListener('click' , () => {neshan('-')})
numZarb.addEventListener('click' , () => {neshan('*')})
numTaghsim.addEventListener('click' , () => {neshan('/')})
numDat.addEventListener('click' , () => {neshan('.')})
numDarsad.addEventListener('click' , () => {neshan('%')})
numTavan.addEventListener('click' , () => {neshan('**')})
numMosavi.addEventListener('click' , () => {equal()})
numAC.addEventListener('click' , () => {neshan('AC')})