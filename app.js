$('.menu-show').click(function(){
    let menuMobile = document.querySelector(".mobile-menu");
    let menuIcon = document.querySelector(".fa-bars");
  
    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
  
      menuIcon.classList.remove("fa-x");
      menuIcon.style.color= "#2a65f0";
    } else {
        
      menuMobile.classList.add("open");
  
  
      menuIcon.classList.add("fa-x");
      menuIcon.style.color = "#fff";
      menuIcon.classList.remove(".fa-bars");
    }
})


