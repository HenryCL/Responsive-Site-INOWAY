function botaoAlterarUsuarioDados(){
    var nomeBotaoInf_usuario = document.getElementById('botao_alterarUsuarioDados_botao').innerText;
    if(nomeBotaoInf_usuario == "Alterar"){

        document.getElementById("botao_confirm_alteracao").style.display="flex";
        document.getElementById('botao_alterarUsuarioDados_botao').innerText = "Cancelar";
        var elms = document.querySelectorAll("[id='preencher']");
        for(var i = 0; i < elms.length; i++){
            elms[i].removeAttribute('readonly', false);
        }
    }else{
        document.getElementById("botao_confirm_alteracao").style.display="none";
        document.getElementById('botao_alterarUsuarioDados_botao').innerText = "Alterar";
        var elms = document.querySelectorAll("[id='preencher']");
        for(var i = 0; i < elms.length; i++){
            elms[i].setAttribute('readonly', true);
            elms[i].innerText = "";
        }
    }
    
}

function buscaCep() {
    let cep = document.getElementsByName('cep_usuario')[0].value;

    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

        //tratar a resposta da requisicao

        request.onload = function() {
            if(request.status === 200){
                let endereco = JSON.parse(request.response);
                document.getElementsByName("logradouro_usuario")[0].value = endereco.street;
                document.getElementsByName("bairro_usuario")[0].value = endereco.neighborhood;
                document.getElementsByName("cidade_usuario")[0].value = endereco.city;
            }
            else if(request.status === 404){
                alert("CEP INVÁLIDO");
                alert(cep);

            }else{
                alert("Erro ao fazer requisição");
            }
        }
    }
}

//closing pages-------------------------------------------------------------

function closePageUsuario(){
    document.querySelector(".third_screen_login").style.display = "none";
}

function closePageUsuarioADM(){
    document.querySelector(".third_screen_login").style.display = "none";
    cancelaCadastro();
}

function closePageLogin(){
    document.querySelector(".sec_screen_login").style.display = "none";
    closePageCadastroUsuario();
}

function closePageCadastroUsuario(){
    document.querySelector(".login").style.display = "flex";
    document.querySelector(".cadastro").style.display = "none";
}
//closing pages-------------------------------------------------------------

//opening pages-------------------------------------------------------------

function openPageLogin(){
    document.querySelector(".sec_screen_login").style.display = "flex";
}

function openPageUsuario(){
    document.querySelector(".third_screen_login").style.display = "flex";
    closePageLogin();
    botaoAlterarUsuarioDados();
}

function openPageCadastroUsuario(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".cadastro").style.display = "flex";
}

//opening pages-------------------------------------------------------------

//botões apenas

function novoCadastro(){
    document.querySelector("#opcoes_cadastro_item_botao").style.display = "flex";
    document.querySelector(".botao_cadastro_item").style.display = "none";
    var elms = document.querySelectorAll("[id='preencher_it']");
        for(var i = 0; i < elms.length; i++){
            elms[i].removeAttribute('readonly', false);
        }
}

function cancelaCadastro(){
    document.querySelector("#opcoes_cadastro_item_botao").style.display = "none";
    document.querySelector(".botao_cadastro_item").style.display = "flex";
    var elms = document.querySelectorAll("[id='preencher_it']");
        for(var i = 0; i < elms.length; i++){
            elms[i].setAttribute('readonly', true);
        }
}

function alteraCadastro(){
    document.querySelector("#opcoes_alterar_item_botao").style.display = "flex";
    document.querySelector("#opcoes_cadastro_item_botao").style.display = "none";
    document.querySelector(".botao_cadastro_item").style.display = "none";
    var elms = document.querySelectorAll("[id='preencher_it']");
        for(var i = 0; i < elms.length; i++){
            elms[i].removeAttribute('readonly', false);
        }
}

function cancela_altCadastro(){
    document.querySelector("#opcoes_alterar_item_botao").style.display = "none";
    document.querySelector("#opcoes_cadastro_item_botao").style.display = "none";
    document.querySelector(".botao_cadastro_item").style.display = "flex";
    var elms = document.querySelectorAll("[id='preencher_it']");
        for(var i = 0; i < elms.length; i++){
            elms[i].setAttribute('readonly', true);
            elms[i].innerText = "";
        }
}

