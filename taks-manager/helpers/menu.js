const { stdout } = require('process');

require ('colors');

const MenuShow =() =>
{
    console.clear();
    console.log('*=======================*'.green);
    console.log('* Select an Option *'.green);
    console.log('*=======================*\n'.green);

    console.log('1. Create Task'.green);
    console.log('2. List Task'.blue);
    console.log('3. LiST Task Completed'.blue);
    console.log('4. List Task Pending'.blue);
    console.log('5. Compeleted Task'.green);
    console.log('6. Delete Task'.red);
    console.log('7. Exit\n'.bgRed);


    //receive user information

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Select an Option: ', (opt) => {
  
        readline.close();
    });

}

const Pause = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Press ENTER to continue: ', (opt) => {
        
        readline.close();
    });
}




module.exports = {
    MenuShow,
    Pause
}
