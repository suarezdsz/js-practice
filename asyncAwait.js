

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

const getEmployee =  (id, callback)=>{
    

    return new Promise((resolve, reject) =>{
        const employee = employees.find( e=> e.id === id)?.name;

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


const getInfoEmployee = async (id) => {

    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(id);
    
        return `the employee's salary: ${ employee } is ${ salary } `;
    } catch (error) {
        return 'Error';
    }



}

getInfoEmployee(id).then( msg => console.log(msg)).catch(err => console.log(err));

