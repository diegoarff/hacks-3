/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];

let props = Object.keys(foo);

let i = 0;
let len = props.length;
let prop, valor;


for(; i < len; i++){
    prop = props[i];
    valor = foo[prop];
    result.push([prop, valor]);
}

//export result
module.exports = result; 