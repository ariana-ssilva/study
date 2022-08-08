$("#btn").on("click", function(){
    var numCep = $("#cep").val();

    $.ajax({
        url: "https://viacep.com.br/ws/"+numCep+"/json",

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