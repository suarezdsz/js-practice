
const getUserById = (id, callback) =>{
    const usuario = {
        id, nombre : 'Daniel Suarez'
    }

    setTimeout(()=>{
        callback(usuario)
    }, 1500);
}

getUserById(10 , (user)=>{console.log(user);});