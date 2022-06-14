/* 
sa ne gandim
- avem de facut un cerc
- avem de reprezentat valorile orelor, minutelor si secundelor pe acel cerc
- intr-o ora avem 60 de minute
- stim ca avem in Javascript Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- stim ca avem functia setTimeout
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
care ce face? 
primeste ca prim parametru o functie care se va autoinvoca (se va apela) dupa un interval pe care noi il stabilim
in al doilea parametru
setInterval, se apeleaza la fiecare ms
*/



// As I said before, one hour is equal to 30 degrees (1 hr = 30°), one minute is equal to 6 degrees (1 min = 6°) and one second is equal to 6 degrees (1 sec = 6°).

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

 const day = new Date();

//  Deoarece există 12 ore într-o rotație de 360 ​​de grade, acționarul orelor se mișcă cu 30 de grade (360 / 12) în fiecare oră.
 let hh = day.getHours() * 30;
 let mm = day.getMinutes() * deg;
 let ss = day.getSeconds() * deg;

 hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
 mn.style.transform = `rotateZ(${mm}deg)`;
 sc.style.transform = `rotateZ(${ss}deg)`;
})