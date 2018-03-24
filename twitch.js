//Client ID
//9k5i20tvswy3iywp84gi4fmw8m0up8
var url = "https://api.twitch.tv/kraken/streams/freecodecamp";
fetch(url,{
                method: 'GET',
                headers: {"client-ID":"9k5i20tvswy3iywp84gi4fmw8m0up8"}
          })
            .then(function(response){
              //inicio do response
                response.json()
              .then(function(data){//manipulando dados
                  var dados = data;
                  console.log(dados);
                  document.getElementById('tela');
              })//fim do response
              .then(function(err){
              //logando o erro casa haja algum
            console.log(err);
          })//fim do err
})//final do metódo fetch
