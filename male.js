
    // Animaciones AOS
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

    // Iniciar botón de galeria 
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
