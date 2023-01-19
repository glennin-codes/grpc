const fs=require('fs');
const path = require('path');
const employees=[];
employees.push({
    name:'hamesi',
    age:34,
    occupation:'developer',
    sallary:1000
});
const amos={
    name:'baamesi',
    age:30,
    occupation:'senior developer',
    sallary:1000
}
employees.push(amos);
// console.log(JSON.stringify(employees,null,3));
const json=JSON.stringify(employees,null,3);
// const employees2=JSON.parse(json);
console.log(employees2);

fs.writeFileSync(path.join(__dirname,'employees.json'),json)
