//require
const fs = require('fs');


const base = 5;
let out = '';

for(i = 0; i <= 10; i++){

   out += `${ base } * ${ i } = ${ base * i} \n`;

}

fs.writeFile('tabla-5.txt', out, (e)=>{
   if(e) throw e;
   console.log('archivo creado');
});