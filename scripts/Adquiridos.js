let btn7 = document.querySelector("#bc1");
let btn8 = document.querySelector("#bc2");
let btn9 = document.querySelector("#bc3");
let btn12 = document.querySelector("#ba12");

var nome3 = [];
var valor3 = [];
var autor3 = [];
var editora3 = [];
var genero3 = [];
var data3 = [];
var l5 = [null, null, null, null, null, null];

btn7.addEventListener('click', function(){
        inp1 = document.querySelector("#name3");
        inp2 = document.querySelector("#valor3");
        inp3 = document.querySelector("#autor3");
        inp4 = document.querySelector("#editora3");
        inp5 = document.querySelector("#genero3");
        inp6 = document.querySelector("#data3");

        let ver1 = inp1.value;
        nome3.push(ver1);
        inp1.value = "";
        l5[0] = nome3;

        let ver2 = inp2.value;
        valor3.push(ver2);
        inp2.value = "";
        l5[1] = valor3;

        let ver3 = inp3.value;
        autor3.push(ver3);
        inp3.value = "";
        l5[2] = autor3;

        let ver4 = inp4.value;
        editora3.push(ver4);
        inp4.value = "";
        l5[3] = editora3;

        let ver5 = inp5.value;
        genero3.push(ver5);
        inp5.value = "";
        l5[4] = genero3;

        let ver6 = inp6.value;
        data3.push(ver6);
        inp6.value = "";
        l5[5] = data3;

        console.log(l5);
        alert("Adicionado") 
});


btn8.addEventListener('click', function(){ 
    var ds = ""; 
    for (var i = 0; i < nome3.length; i++) {
        ds = ds +"\n\nNome: "+ nome3[i] + "\nValor: " + valor3[i]+"\nAutor: " + autor3[i]+"\nEditora: " + editora3[i]+"\nGênero: " + genero3[i]+"\nData prevista de leitura: " + data3[i];
      }
    par = document.querySelector("#modal-body5");
    par.innerText = ds;     
});

btn9.addEventListener('click', function(){
    var r = ""; 
    for (var i = 0; i < nome3.length; i++) {
        r = r +"\n\nCódigo: "+ i+"\nNome: "+ nome3[i] + "\nValor: " + valor3[i]+"\nAutor: " + autor3[i]+"\nEditora: " + editora3[i]+"\nGênero: " + genero3[i]+"\nData prevista de leitura: " + data3[i];
      }
    par = document.querySelector("#ba");
    par.innerText = r;
});  

let btsalvar3 = document.querySelector("#savechanges3");

btsalvar3.addEventListener('click', function(){
  
    alert("Salvo, entre em vizualizar para observar a alteração") 
    rd1 = document.querySelector("#r13"); 
    rd2 = document.querySelector("#r14");
    rd3 = document.querySelector("#r15");
    rd4 = document.querySelector("#r16");
    rd5 = document.querySelector("#r17");
    rd6 = document.querySelector("#r18");
    inp7 = document.querySelector("#mudar3");
    inp8 = document.querySelector("#escolha3");
    let ver7 = inp7.value;
    let ver8 = inp8.value;
   
            if(rd1.checked){
                nome3[ver8] = ver7; 
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd2.checked){
                valor3[ver8] = ver7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd3.checked){
                autor3[ver8] = ver7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd4.checked){
                editora3[ver8] = ver7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd5.checked){
                genero3[ver8] = ver7;
                inp7.value = "";
                inp8.value = "";
            }
            
            else if(rd6.checked){
                data3[ver8] = ver7;
                inp7.value = "";
                inp8.value = "";
            } 
    
});

btn12.addEventListener('click', function(){
    var d = ""; 
    for (var i = 0; i < nome3.length; i++) {
        d = d +"\n\nCódigo: "+ i+"\nNome: "+ nome3[i] + "\nValor: " + valor3[i]+"\nAutor: " + autor3[i]+"\nEditora: " + editora3[i]+"\nGênero: " + genero3[i]+"\nData prevista de leitura: " + data3[i];
      }
    par = document.querySelector("#aqui3");
    par.innerText = d;
});  

let btexcluir3 = document.querySelector("#excluir3");

btexcluir3.addEventListener('click', function(){
    alert("Excluído, entre em vizualizar para observar a alteração") 
    inp70 = document.querySelector("#esco3");
    let vel70 = inp70.value;
    
    nome3.splice(vel70, 1);
    valor3.splice(vel70, 1);
    autor3.splice(vel70, 1);
    editora3.splice(vel70, 1);
    genero3.splice(vel70, 1);
    data3.splice(vel70, 1); 
});  


