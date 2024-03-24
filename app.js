
let header = document.getElementById("id-header");
let navbar = document.getElementById("id-navbar");
let navLinks = document.querySelectorAll('header nav a');

// let offset = sec.offsetTop - 100;
let height = 953;

window.onscroll = () => {
    // let header = document.querySelector('header');
    // let header = document.getElementById('id-header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // alert(window.scrollY);
    // console.log(window.scrollY)
    // if( window.scrollY > 433 ){
    //     console.log('Home');
    // }
    // if( window.scrollY > 1174 ){
    //     console.log('About');
    // }
    // links.classList.remove('active');
    navLinks[0].classList.toggle('active', window.scrollY <= 602);
    // navLinks[1].classList.toggle('active', window.scrollY > 602 && window.scrollY <= 1206 );
    // navLinks[2].classList.toggle('active', window.scrollY > 1206 && window.scrollY <= 1809);
    // navLinks[3].classList.toggle('active', window.scrollY > 1809 && window.scrollY <= 2411);
    // navLinks[4].classList.toggle('active', window.scrollY = 2412);
    // console.log(window.scrollY);
    // alert(sessionStorage.getItem("opMenu"));
}

let menuIcon = document.getElementById('menu-icon');
// let navbar = document.getElementById('id-navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Adiciona nombre de clase "active" en la etiqueta nav del menu principal
document.addEventListener("DOMContentLoaded", function() {
    let controlAnterior=null;
    // document.getElementById("id-navbar").addEventListener("click", function(e) {        
        navbar.addEventListener("click", function(e) { 
        if(controlAnterior!==null){
            controlAnterior.classList.toggle('active');
        }
        // let id = e.target.id;// alert(id);
        let elemento = e.target;        
        elemento.classList.toggle('active');
        controlAnterior=elemento;
    });
  });

if (window.sessionStorage) {
    sessionStorage.setItem("opMenu", window.scrollY);
    // alert(window.scrollY);
}


//   if (window.sessionStorage) {
//     sessionStorage.setItem("nombre", "Gonzalo");
  
//     var nombre = sessionStorage.getItem("nombre");
  
//     sessionStorage.removeItem("nombre");
  
//   }
//   else{
//     throw new Error('Tu Browser no soporta sessionStorage!');
//   }

let seccion = document.querySelectorAll('section');
alert(seccion[0].offsetHeight);

if (typeof(Storage) !== 'undefined') {
    // Código cuando Storage es compatible
    localStorage.setItem('Nombre', 'Miguel Antonio')
    localStorage.Apellido = 'Márquez Montoya'
  } else {
   // Código cuando Storage NO es compatible
  }

  let firstName = localStorage.getItem('Nombre'),
  lastName  = localStorage.Apellido

  console.log(`Hola, mi nombre es ${firstName} ${lastName}`)
