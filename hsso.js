
    document.addEventListener('DOMContentLoaded', function() {
        console.log('init carrousel')

        let swiper = document.querySelector('.swiper')

        if(swiper){
            const slides = swiper.querySelectorAll('.wp-block-media-text');
            let wrapper = document.createElement('div')
            let next = document.createElement('div')
            let prev = document.createElement('div')
            
            let controls = document.createElement('span')

            prev.classList.add('swiper-button-prev')
            next.classList.add('swiper-button-next')
            controls.classList.add('swiper-controls')
            controls.appendChild(prev)
            controls.appendChild(next)

            wrapper.classList.add('swiper-wrapper')
            slides.forEach(slide => {
                slide.classList.add('swiper-slide');
                wrapper.appendChild(slide)
                
            });
            
            swiper.appendChild(wrapper)
            swiper.appendChild(controls)

           
            
            

            // Inicializar Swiper en el contenedor con clase 'swiper'
            const carousel = new Swiper('.swiper', {
                // Configuración básica
                loop: false,
                slidesPerView: 1,
                spaceBetween: 20,
                rewind: true,
                autoplay: {
                    delay: 5500,
                    
                },
                
                // Navegación
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
                // Breakpoints responsivos
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });

        }
      
        
        
    
        
        
        
    });

    const effects = ['fade-in','zoom-in','flip-up'];
    document.querySelectorAll('.wp-block-image').forEach((image)=>{
        if(!image.classList.contains('french-bg') 
            && !image.parentElement.classList.contains("wp-block-gallery") 
                && !image.parentElement.classList.contains("banner")
                    && !image.parentElement.classList.contains("french-grid")) 
            {
            const randomEffect = effects[Math.floor(Math.random() * effects.length)];
            image.setAttribute('data-aos', randomEffect);
        }
    })
   
    AOS.init();
    
    let verBtn = document.querySelector('a.btn-ver')
    if(verBtn){
        console.log(verBtn)
        verBtn.href= '' 
        verBtn.type = 'button'
        let gallery = verBtn.parentElement.querySelector('.wp-block-gallery')

        if(gallery){
            let label = verBtn.innerHTML
            verBtn.addEventListener('click',(e)=>{
                e.preventDefault()
                gallery.classList.toggle('wp-block-gallery-collapsed')
                if(verBtn.innerHTML != 'Ver menos'){
                    verBtn.innerHTML = 'Ver menos'
                }else{
                    verBtn.innerHTML = label
                }
            })

        }
        
    }

