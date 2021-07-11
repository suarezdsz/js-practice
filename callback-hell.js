


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
    const employee = employees.find(e => e.id === id);

    if(employee){
        callback(null, employee);
    }else{
        callback(`Employee widt id ${id} does not exist`)
    }
    return employee;
}

const getSalary = (id, callback) => {
    const salary = salaries.find( e => e.id === id)?.salary;

    if(salary){
        callback(null, salary);
    }else{
        callback('Salary does not exist');
    }
};


//print
getEmployee(id, (err, employees)=>{
    if(err){
        console.log('ERROR');
        return console.log(err);
    }

    console.log('Exist Employee');
    console.log(employees.name);

    
    getSalary(id, (err, salaries)=>{
        if(err){
            console.log('ERROR');
            return  console.log(err);
        }

        console.log(salaries);
    });

});


