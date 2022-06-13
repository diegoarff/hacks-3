/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

function capital(string){
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

function upper(string){
    string = string.toUpperCase();
    return string;
}

result = Object.assign({}, foo);

//NAME
result.name = capital(result.name);

//ROLES
result.roles[0] = upper(result.roles[0]);
result.roles.push(roleSuperUser, roleUser);

//LEVELS
result.levels = levels;
let levLen = result.levels.length;

for(let i = 0; i < levLen; i++){
    result.levels[i].LEVEL =  result.levels[i].LEVEL.replace("l-", "L")
}

//SKILLS
let resSk = result.skills;

//adding skills
resSk.unshift(skills[0], skills[1])
resSk.splice(5, 0, skills[2])
resSk.push(skills[3])

//modifying skills
result.skills = resSk.map(function(prop){
    if(prop == "html" || prop == "css") prop = upper(prop);

    else prop = capital(prop);

    return prop;
})

//DELETE ALIAS
delete result.alias;

//export result
module.exports = result; 