const controller = "new UserController('Sukuna', 'Ryomen')"
const method = "getLastName()"
const comand = eval (controller + "." + method)


const params = {
    "name": "Sukuna",
    "last_name": "Ryomen"
}

const obj = {
    "column01": "Coluna 01",
    "column02": "Coluna 02"
  };
  
var p = ""

Object.keys(params).forEach((key) => {
    p += "'" + params[key] + "'";
});

console.log(p)