const restApi = 'http://localhost:3001';
var concatenador = (separador,...args) => {
    let result = "";
    args.forEach(n => result += n + separador);
    return result;
}
var httpRequests = {
    registrarUsuario:concatenador('/',restApi,'restApi','register'),
    loginUsuario:concatenador('/',restApi,'restApi','login'),
    allPosts:concatenador('/',restApi,'restApi','allPosts'),
    registrarPost:concatenador('/',restApi,'restApi','registrarPost'),
    verificarAuth:concatenador('/',restApi,'restApi','verificarAuth'),
    logout:concatenador('/',restApi,'restApi','logout'),


    
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