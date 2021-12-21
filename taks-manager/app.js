require ('colors');
const { MenuShow, Pause} = require('./helpers/menu');

console.clear();
const main = async() =>{
    console.log('Go App');

    MenuShow();
    Pause();
}

main();