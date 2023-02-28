
let pantalla = document.getElementById('pantalla')

const wipe = ()=>{
    pantalla.value = '';

}

const show = (n) => {
    pantalla.value +=n;

}

const calcu = () => {
    pantalla.value = eval(pantalla.value);
}
 const wipe2 = ()=>{
    pantalla.value = ("CASIO");
    
 }

 