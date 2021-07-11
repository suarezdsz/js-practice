




const employees = [
    {id : 1, name : 'Jose'},
    {id : 2, name : 'Luis'},
    {id : 3, name : 'Pedro'},
    {id : 4, name : 'Manuel'},
];

const salaries = [ 
    {id: 1, salary: 1500.00},
    {id: 2, salary: 2800.00},
    {id: 3, salary: 1200.00},
    {id: 4, salary: 1700.00},
];

const id = 1

const getEmployee = (id, callback)=>{
    
    /*
    const promese = new Promise((resolve, reject)=>{
        const employee = employees.find(e => e.id === id);

        if(employee){
            resolve(employee);
        }else{
            reject('error');
        }
    });

    return promese;*/

    //simplify code

    return new Promise((resolve, reject) =>{
        const employee = employees.find( e=> e.id === id);

        (employee) ? resolve( employee) : reject ( 'Employee does not exist');
    });
}

const getSalary = (id) => {
    

    return new Promise( (resolve, reject) => {
        const salary = salaries.find( e => e.id === id)?.salary;
        (salary)
            ? resolve(salary)
            : reject( 'Record does not exist' );
    });
};


//print
getEmployee(id).then( employee => {
    console.log(employee)
    getSalary(id).then(salary => console.log( salary)).catch( err => console.log(err));
    }).catch(err => console.log(err));




