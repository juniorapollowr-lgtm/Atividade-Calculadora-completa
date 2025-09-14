let lista = [];

function addlista(valor){
    lista.push(valor);
    document.getElementById("resultado").value = lista.join('');
}

function um(){
    addlista("1");
}

function dois(){
    addlista("2");
}
function tres(){
    addlista("3");
}
function quatro(){
    addlista("4")
}
function cinco(){
    addlista("5")
}
function seis(){
    addlista("6")
}
function sete(){
    addlista("7")
}
function oito(){
    addlista("8")
}
function nove(){
    addlista("9")
}

function zero(){
    addlista("0")
}

function soma(){
    addlista("+")
}

function div(){
    addlista("/")
}

function mult(){
    addlista("*")
}

function menos(){
    addlista("-")
}

function rest(){
    addlista("%")
}

function ponto(){
    addlista(".")
}

function limpa(){
    lista = []; 
    document.getElementById("resultado").value = '';
}
function apagar(){
    lista.pop()
    document.getElementById("resultado").value = lista.join('')
}

function resultado() {
    let expressao = lista.join('');       // junta tudo numa string
    let res = eval(expressao);            // calcula
    document.getElementById("resultado").value = res; // mostra no display
    lista = [res.toString()];             // opcional: coloca resultado na lista pra continuar calculando
}
