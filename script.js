var son = Number(prompt("Son kiriting biz uni toq yoki juftligini aniqlab beramiz:"));

if ( son % 2  === 0) {
  alert("Juft son");
} else {
  alert("Toq son");
}
alert ("keyingi amalga otish uchun ok ni bosing");

var kiritilgan  = Number(prompt("Son kiriting:"));
var daraja = Number(prompt("Nechanchi darajaga oshiray?"));

alert( kiritilgan * daraja);

alert("KEYINGI AMALGA OTISH UCHUN UCHUN YANA OK NI BOSING");
let faktorial = Number(prompt("Son kiriting, faktorialini aniqlaymiz"));
let box = 1;
let i = 1;

while (i <= faktorial) {
  box = box + i;
  i++;
}

alert(box);

alert("tabriklaymiz sz oshqovoq emassz");