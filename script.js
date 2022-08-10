let color= document.getElementById('color');
let text= document.getElementById('testo');
let emoji= document.getElementById('changeImg');
let backE= document.getElementById('backg');
let input= document.getElementById('input');
let contEm= document.getElementById('realE');
        
function changeText() {
    if (input.type=='password') {
        input.type='text';
        backE.classList.replace("emoji1", "emoji2");
        input.style.color="#000";
        input.style.background="transparent";
        backE.style.zIndex=-1;
        emoji.src="professor.png";
    }
    else {
        input.type='password';
        backE.classList.replace("emoji2", "emoji1");
        input.style.color="#fff";
        emoji.src="mask.png";
        backE.style.zIndex=1;
        input.style.backgroundColor="#000";
    };
}
    
function BarColor() {
    color.classList.remove('debole');   
    color.classList.remove('medio'); 
    color.classList.remove('forte'); 
    if (input.value.length===0) {
        color.classList.add('default');
        text.innerHTML='Nessun Valore';
        text.style.backgroundColor="white";
        text.style.color="black";
    }
    else if (input.value.length<=4) {
        color.classList.add('debole');
        text.innerHTML="Debole";
        text.style.backgroundColor="red";
        text.style.color="white";
    }
    else if (input.value.length<=7) {
        color.classList.add('medio');
        text.innerHTML="Medio";
        text.style.backgroundColor="yellow";
        text.style.color="black";
    }
    else {
        color.classList.add('forte');
        text.innerHTML="Forte";
        text.style.backgroundColor="green";
        text.style.color="white";
     }   
}

input.addEventListener("input", BarColor);
contEm.addEventListener("click", changeText);