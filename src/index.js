// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/usuarios-page";
import * as CRUD from './js/crud-provider';


// obtenerUsuarios();
// init();

CRUD.getUsuario( 1 ).then(  );

CRUD.crearUsuario({
    name: 'Leandro',
    job: 'Devs'
}).then(  );

CRUD.actualizarUsuario( 2, {
    name: 'José',
    job: 'Tachero'
}).then( console.log )