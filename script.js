let searchFrom = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () =>
{
    searchFrom.classList.toggle('active');    
    
        shoppingCart.classList.remove('active'); 
        loginForm.classList.remove('active');  
        navBar.classList.remove('active');  
    
}
let shoppingCart = document.querySelector('.shopping-cart')
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active'); 
        searchFrom.classList.remove('active');  
        loginForm.classList.remove('active');  
        navBar.classList.remove('active');     
    
}

let loginForm = document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');   
        searchFrom.classList.remove('active');  
        shoppingCart.classList.remove('active');   
        navBar.classList.remove('active');   
    
}

let navBar= document.querySelector('.navbar')
document.querySelector('#').onclick = () =>
{
    navBar.classList.toggle('active');  
        searchFrom.classList.remove('active');  
        shoppingCart.classList.remove('active'); 
        loginForm.classList.remove('active');  
         
    
}


window.onscroll = () =>
    {
        searchFrom.classList.remove('active');  
        shoppingCart.classList.remove('active'); 
        loginForm.classList.remove('active');  
        navBar.classList.remove('active');  
        
    }

    const swiper = new Swiper('.product-slider', {
      loop: true,
      grabCursor:true,
      spaceBetween: 30,
     
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints:{
        0:{
          slidesPreView:1
        },
        620:{
          slidesPreView:2
        },
        1024:{
          slidesPreView:3
        },
      }
    
    });
  