let btn1 = document.querySelector("#ba1");
let btn2 = document.querySelector("#ba2");
let btn3 = document.querySelector("#ba3");

var nome = [];
var autor = [];
var genero = [];
var editora = [];
var nota = [];
var tempo = [];
var l1 = [null, null, null, null, null, null];

btn1.addEventListener('click', function(){
        inp1 = document.querySelector("#name1");
        inp2 = document.querySelector("#autor1");
        inp3 = document.querySelector("#genero1");
        inp4 = document.querySelector("#editora1");
        inp5 = document.querySelector("#nota1");
        inp6 = document.querySelector("#tempo1");
        let vel1 = inp1.value;
        nome.push(vel1);
        inp1.value = "";
        l1[0] = nome;

        let vel2 = inp2.value;
        autor.push(vel2);
        inp2.value = "";
        l1[1] = autor;

        let vel3 = inp3.value;
        genero.push(vel3);
        inp3.value = "";
        l1[2] = genero;

        let vel4 = inp4.value;
        editora.push(vel4);
        inp4.value = "";
        l1[3] = editora;

        let vel5 = inp5.value;
        nota.push(vel5);
        inp5.value = "";
        l1[4] = nota;

        let vel6 = inp6.value;
        tempo.push(vel6);
        inp6.value = "";
        l1[5] = tempo;

        console.log(l1);
        alert("Adicionado")     
          
});

btn2.addEventListener('click', function(){
    var descr = ""; 
    for (var i = 0; i < nome.length; i++) {
        descr = descr +"\n\nNome: "+ nome[i] + "\nAutor: " + autor[i]+"\nGênero: " + genero[i]+"\nEditora: " + editora[i]+"\nNota: " + nota[i]+"\nTempo:" + tempo[i];
      }
    par = document.querySelector("#modal-body");
    par.innerText = descr;     
});

btn3.addEventListener('click', function(){
    var a = ""; 
    for (var i = 0; i < nome.length; i++) {
        a = a +"\n\nCódigo: "+ i+"\nNome: "+ nome[i] + "\nAutor: " + autor[i]+"\nGênero: " + genero[i]+"\nEditora: " + editora[i]+"\nNota: " + nota[i]+"\nTempo:" + tempo[i];
      }
    par = document.querySelector("#escrever");
    par.innerText = a;
});  

let btsalvar = document.querySelector("#savechanges");

btsalvar.addEventListener('click', function(){
  
    alert("Salvo, entre em vizualizar para observar a alteração") 
    rd1 = document.querySelector("#r1"); 
    rd2 = document.querySelector("#r2");
    rd3 = document.querySelector("#r3");
    rd4 = document.querySelector("#r4");
    rd5 = document.querySelector("#r5");
    rd6 = document.querySelector("#r6");
    inp7 = document.querySelector("#mudar");
    inp8 = document.querySelector("#escolha");
    let vel7 = inp7.value;
    let vel8 = inp8.value;
   
            if(rd1.checked){
                nome[vel8] = vel7; 
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd2.checked){
                autor[vel8] = vel7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd3.checked){
                genero[vel8] = vel7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd4.checked){
                editora[vel8] = vel7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd5.checked){
                nota[vel8] = vel7;
                inp7.value = "";
                inp8.value = "";
            }
            
            else if(rd6.checked){
                tempo[vel8] = vel7;
                inp7.value = "";
                inp8.value = "";
            } 
    
});
    




