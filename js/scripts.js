
function adicionaVisor(valor) {
    document.getElementById('visor').value += valor
}
function limparVisor(){
    document.getElementById('visor').value = '';
}
function calcular(){
    const resultado = document.getElementById('visor').value;
    if(resultado)
    {
        document.getElementById('visor').value = eval(resultado);
    }
}

document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        calcular('');
    }
})

document.addEventListener("keydown", function(esc){
    if(esc.key === 'Escape'){
        limparVisor('');
    }
})