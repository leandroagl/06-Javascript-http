

const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async( id ) => {

    const resp = await fetch(`${ urlCRUD }/${ id }`);
    const { data } = await resp.json();

    return data;
};


const crearUsuario = async( usuario ) => {

    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Conten-Type': 'aplication/json'
        }
    });

    return await resp.json();

};


export {
    getUsuario,
    crearUsuario    
}