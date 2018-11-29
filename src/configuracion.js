const restApi = 'http://localhost:3001';
var concatenador = (separador,...args) => {
    let result = "";
    args.forEach(n => result += n + separador);
    return result;
}
var httpRequests = {
    consultar:concatenador('/',restApi,'restApi','usIndex'),
    registrarUsuario:concatenador('/',restApi,'restApi','registrarUsuario'),
    loginUsuario:concatenador('/',restApi,'restApi','loginUsuario'),
    allPosts:concatenador('/',restApi,'restApi','allPosts'),

}
var config = {
    restApi:restApi
}

  // fetch(configApp.config.usuariosAcciones.consultar,{type:'json',method:'GET'}).then((response) =>{
        //     if(response.ok) return response.json();
        // }).then((data) =>{
        //     console.log(data);
        // })
module.exports = {config, concatenador,httpRequests};