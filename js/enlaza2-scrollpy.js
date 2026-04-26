const secciones = document.querySelectorAll("h4[id]");
const links = document.querySelectorAll(".nav-link");
const stickyNav = document.querySelector(".sticky-tabs");
const trigger = document.getElementById("servicios");

window.addEventListener("scroll", () => {

  /* 🔹 mostrar / ocultar nav */
  const triggerTop = trigger.offsetTop;

  if (window.scrollY >= triggerTop - 100) {
    stickyNav.classList.add("visible");
  } else {
    stickyNav.classList.remove("visible");
  }

  /* 🔹 activar tabs */
  let current = "";

  secciones.forEach(sec => {
   // const top = sec.offsetTop - 120;
    const rect = sec.getBoundingClientRect(); /**/
     // detectar si está cerca del centro de pantalla
    const middle = window.innerHeight / 2;

    if (rect.top <= middle && rect.bottom >= middle) {
      current = sec.getAttribute("id");
    }
  
      
  links.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  });

/*

  secciones.forEach(sec => {
    

    // detectar si está cerca del centro de pantalla
    const middle = window.innerHeight / 2;

    if (rect.top <= middle && rect.bottom >= middle) {
      current = sec.getAttribute("id");
    }
  });
  */

});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = this.getAttribute('href').replace('#', '');
    const target = document.getElementById(id);

    const yOffset = window.innerHeight / 2; // mitad pantalla
    const y = target.getBoundingClientRect().top + window.scrollY - yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
});


    