let btn4 = document.querySelector("#bb1");
let btn5 = document.querySelector("#bb2");
let btn6 = document.querySelector("#bb3");
let btn11 = document.querySelector("#ba11");

var nome2 = [];
var valor2 = [];
var autor2 = [];
var editora2 = [];
var genero2 = [];
var local2 = [];
var l3 = [null, null, null, null, null, null];

btn4.addEventListener('click', function(){
        inp1 = document.querySelector("#name2");
        inp2 = document.querySelector("#valor2");
        inp3 = document.querySelector("#autor2");
        inp4 = document.querySelector("#editora2");
        inp5 = document.querySelector("#genero2");
        inp6 = document.querySelector("#local2");
        let var1 = inp1.value;
        nome2.push(var1);
        inp1.value = "";
        l3[0] = nome2;

        let var2 = inp2.value;
        valor2.push(var2);
        inp2.value = "";
        l3[1] = valor2;

        let var3 = inp3.value;
        autor2.push(var3);
        inp3.value = "";
        l3[2] = autor2;

        let var4 = inp4.value;
        editora2.push(var4);
        inp4.value = "";
        l3[3] = editora2;

        let var5 = inp5.value;
        genero2.push(var5);
        inp5.value = "";
        l3[4] = genero2;

        let var6 = inp6.value;
        local2.push(var6);
        inp6.value = "";
        l3[5] = local2;

        console.log(l3);
        alert("Adicionado") 
});


btn5.addEventListener('click', function(){ 
    var des = ""; 
    for (var i = 0; i < nome2.length; i++) {
        des = des +"\n\nNome: "+ nome2[i] + "\nValor: " + valor2[i]+"\nAutor: " + autor2[i]+"\nEditora: " + editora2[i]+"\nGênero: " + genero2[i]+"\nLocal de Compra: " + local2[i];
      }
    par = document.querySelector("#modal-body3");
    par.innerText = des;     
});

btn6.addEventListener('click', function(){
    var z = ""; 
    for (var i = 0; i < nome2.length; i++) {
        z = z +"\n\nCódigo: "+ i+"\nNome: "+ nome2[i] + "\nValor: " + valor2[i]+"\nAutor: " + autor2[i]+"\nEditora: " + editora2[i]+"\nGênero: " + genero2[i]+"\nLocal de Compra: " + local2[i];
      }
    par = document.querySelector("#ab");
    par.innerText = z;
});  

let btsalvar2 = document.querySelector("#savechanges2");

btsalvar2.addEventListener('click', function(){
  
    alert("Salvo, entre em vizualizar para observar a alteração") 
    rd1 = document.querySelector("#r7"); 
    rd2 = document.querySelector("#r8");
    rd3 = document.querySelector("#r9");
    rd4 = document.querySelector("#r10");
    rd5 = document.querySelector("#r11");
    rd6 = document.querySelector("#r12");
    inp7 = document.querySelector("#mudar2");
    inp8 = document.querySelector("#escolha2");
    let var7 = inp7.value;
    let var8 = inp8.value;
   
            if(rd1.checked){
                nome2[var8] = var7; 
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd2.checked){
                valor2[var8] = var7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd3.checked){
                autor2[var8] = var7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd4.checked){
                editora2[var8] = var7;
                inp7.value = "";
                inp8.value = "";
            }
        
            else if(rd5.checked){
                genero2[var8] = var7;
                inp7.value = "";
                inp8.value = "";
            }
            
            else if(rd6.checked){
                local2[var8] = var7;
                inp7.value = "";
                inp8.value = "";
            } 
    
});

btn11.addEventListener('click', function(){
    var d = ""; 
    for (var i = 0; i < nome2.length; i++) {
        d = d +"\n\nCódigo: "+ i+"\nNome: "+ nome2[i] + "\nValor: " + valor2[i]+"\nAutor: " + autor2[i]+"\nEditora: " + editora2[i]+"\nGênero: " + genero2[i]+"\nLocal de Compra: " + local2[i];
      }
    par = document.querySelector("#aqui2");
    par.innerText = d;
});  

let btexcluir2 = document.querySelector("#excluir2");

btexcluir2.addEventListener('click', function(){
    alert("Excluído, entre em vizualizar para observar a alteração") 
    inp60 = document.querySelector("#esco2");
    let vel60 = inp60.value;

    nome2.splice(vel60, 1);
    valor2.splice(vel60, 1);
    autor2.splice(vel60, 1);
    editora2.splice(vel60, 1);
    genero2.splice(vel60, 1);
    local2.splice(vel60, 1);
    
});  
