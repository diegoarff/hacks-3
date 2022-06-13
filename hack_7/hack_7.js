/**
* agregar los skills del objeto foo al array result, 
* mediante la funcion map 
*
* output => ["javascript", "html", "css", "python", "flask", "react", "redux"]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"]
};
let result;

result = foo.skills.map(function(items){
    return items;
})

//export result
module.exports = result; 