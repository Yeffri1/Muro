const restApi = 'http://localhost:3001';
var concatenador = (separador,...args) => {
    let result = "";
    args.forEach(n => result += n + separador);
    return result;
}
var usuariosAcciones = {
    consultar:concatenador('/',restApi,'users','usIndex'),
    registrarUsuario:concatenador('/',restApi,'users','registrarUsuario'),
    loginUsuario:concatenador('/',restApi,'users','loginUsuario'),
}
var config = {
    restApi:restApi
}

  // fetch(configApp.config.usuariosAcciones.consultar,{type:'json',method:'GET'}).then((response) =>{
        //     if(response.ok) return response.json();
        // }).then((data) =>{
        //     console.log(data);
        // })
module.exports = {config, concatenador,usuariosAcciones};