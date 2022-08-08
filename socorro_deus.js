$("#btn").on("click", function(){
    var cepNum = $("#cep").val();

    $.ajax({
        url: "https://viacep.com.br/ws/"+cepNum+"/json",

        type: "get",
        dataType: "json",

        success:function(dados){
            console.log(dados);
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
        }
    })

   
})