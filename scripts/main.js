let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    
    if (miSrc === 'images/lamborghini.jpg') {
      miImage.setAttribute('src','images/firefox2.png');
    } 
    else {
      miImage.setAttribute('src', 'images/lamborghini.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Ingresa tu nombre.');
   if(!miNombre) {
       estableceNombreUsuario();
   }
    else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Lamborghini es genial,' + miNombre;
         }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Lamborghini es genial,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}

