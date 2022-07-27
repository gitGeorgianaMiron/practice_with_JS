'use strict';

///////////////////////////////////////
// Scoping in Practice

function calcAge (birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`
    console.log(output);
  }
  printAge();

  return age;
}
// const firstName = 'Jonas';
calcAge(1990);

///  ---- incorrect ----
// console.log(age);
// printAge();




///////////////  block scope ///////////////////////

function calcAge (birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`
    console.log(output);

    if(birthYear >= 1990 && birthYear <= 1996){
      var millenial =  true;
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }

    // console.log(str); // error
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1990);