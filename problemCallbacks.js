
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

const getEmployee = (id, callback)=>{
    const employee = employees.find(e => e.id === id);

    if(employee){
        callback(employee);
    }else{
        callback('Employee widt id ${10} does not exist')
    }
    return employee;
}

getEmployee(4, (err, employees)=>{
    if(err){
        console.log('ERROR');
        return console.log(err);
    }

    console.log('Exist Employee');
    console.log(employees);
})