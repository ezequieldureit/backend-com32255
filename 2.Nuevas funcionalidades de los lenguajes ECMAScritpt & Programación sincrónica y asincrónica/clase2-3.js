const usuario = {
    name: 'Ezequiel',
    years: 20,
    active: true
}



const auth = {
    usuario: 'edure@mail.com',
    password: 'p@ssword'
}

const usuarioFull = {...usuario, ...auth}

const {password, ...infoUser} = usuarioFull

const response = {
    ...infoUser,
    
}

console.log(response)