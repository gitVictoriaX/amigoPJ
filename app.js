// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigo =[];

function agregarAmigo (){
    let nombre=document.getElementById('amigo').value;
    if(nombre==""){
        alert("Por favor, insertar un nombre!!");
    }
    else{
        
        listaDeAmigo.push(nombre);
        //console.log(`lista de amigos: ${listaDeAmigo}`);
        limpiarCaja();
        visualizarLista();
    }
    
}

function limpiarCaja(){
    document.querySelector('#amigo').value='';
}

function validarEntrada(nombre){
    
}

function visualizarLista(){
    listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML="";

    let indice=0;

    cadenaHTML="";
    li="<li>"
    li2="</li>"

    while(indice < listaDeAmigo.length)
    {
        cadenaHTML=cadenaHTML+li+listaDeAmigo[indice]+li2;
        console.log(listaDeAmigo[indice]);
        indice++;
    }

    //lista.innerHTML="<li> Hola 1 </li> <li> Hola 2 </li>";
    listaHTML.innerHTML=cadenaHTML;
}

function sortearAmigo(){
    if (listaDeAmigo.length != 0) {
        let indiceSorteado = Math.floor(Math.random()*listaDeAmigo.length)+1;
        resultadoHTML = document.querySelector('#resultado');
        resultadoHTML.innerHTML='<li> Tu amigo secreto es: ' + listaDeAmigo[indiceSorteado-1]+ '</li>';
        //console.log(listaDeAmigo.length);
        //console.log(indiceSorteado);   
    } else{
        alert("Hola, Ingresa a tus amigos...");
    }   
    
}