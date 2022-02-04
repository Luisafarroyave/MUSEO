const image = document.querySelectorAll('.img__gallery')
const imagenlight = document.querySelector('.add__image')
const containerlight = document.querySelector('.imagen__light')
const hamburguer1 = document.querySelector('.hamburguer');

image.forEach(image =>{
    image.addEventListener('click', ()=>{
        aparecerImagen(image.getAttribute('src')) 
        
    })
})

containerlight.addEventListener('click', (e)=>{
    if(e.target !== imagenlight){
        containerlight.classList.toggle('show')
        imagenlight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})


const aparecerImagen = (image) =>{
    imagenlight.src = image;
    containerlight.classList.toggle('show')
    imagenlight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}
