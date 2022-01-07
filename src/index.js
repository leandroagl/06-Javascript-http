// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/usuarios-page";
import * as CRUD from './js/crud-provider';


// obtenerUsuarios();
// init();

CRUD.getUsuario( 1 ).then( console.log );
